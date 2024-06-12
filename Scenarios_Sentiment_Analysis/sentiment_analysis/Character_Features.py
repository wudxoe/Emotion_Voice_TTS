import re
import json
from collections import Counter

def extract_dialogue_info(text, age_json_path, gender_json_path):
    # JSON 파일에서 나이 및 성별 정보 읽어오기
    with open(age_json_path, "r", encoding='utf-8') as age_file:
        age_data = json.load(age_file)

    with open(gender_json_path, "r", encoding='utf-8') as gender_file:
        gender_data = json.load(gender_file)

    # 대사 추출을 위한 정규표현식
    dialogue_pattern = re.compile(r'([가-힣\d]+)\s*:\s*(.*?)\n')

    # 등장인물 저장
    characters = [character for character, _ in dialogue_pattern.findall(text)]
    character_counts = Counter(characters)

    # 등장 횟수 순으로 인물 나열
    sorted_characters = sorted(character_counts.items(), key=lambda x: x[1], reverse=True)

    # 각 등장인물의 이름, 성별, 나이 정보 출력
    for character, count in sorted_characters:
        # 등장인물의 성별 정보 가져오기
        gender_info = next((item for item in gender_data if item["word"] == character), None)
        gender = "남자" if gender_info and gender_info["gender"] == 1 else "여자" if gender_info and gender_info["gender"] == 2 else "알 수 없음"

        # 등장인물의 나이 정보 가져오기
        age_info = next((item for item in age_data if item["word"] == character), None)
        age = {
            1: "아이",
            2: "청소년",
            3: "어른",
            4: "노인"
        }.get(age_info["age"], "알 수 없음") if age_info else "알 수 없음"

        print(f"이름: {character}, 성별: {gender}, 나이: {age}")
