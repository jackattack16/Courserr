import re, random

# Load the JS file with instantiations and courseMap entries
with open("/mnt/data/ClassInstantiation_updated.js", "r", encoding="utf-8") as f:
    js_code = f.read()

# Extract courseMap entries (name, var)
coursemap_lines = re.findall(r'courseMap\.set\((.*?)\);', js_code, flags=re.DOTALL)
pairs = []
for line in coursemap_lines:
    m = re.match(r'\s*["\'](.*?)["\']\s*,\s*([A-Za-z0-9_]+)\s*', line.strip())
    if m:
        pairs.append((m.group(1), m.group(2)))

# Subjects to CSS mapping keywords
subject_to_class = {
    "Agriculture": "agriculture",
    "Engineering": "appliescience",
    "Manufacturing": "appliescience",
    "Business": "business",
    "Finance": "business",
    "Marketing": "business",
    "Management": "business",
    "English": "english",
    "Health": "health",
    "Human": "humanservices",
    "Services": "humanservices",
    "Information": "informationsolutions",
    "Technology": "informationsolutions",
    "Math": "mathematics",
    "Music": "music",
    "PE": "pe",
    "Physical": "pe",
    "Science": "science",
    "Social": "socialstudies",
    "History": "socialstudies",
    "Language": "language",
    "French": "language",
    "German": "language",
    "Spanish": "language",
}

def detect_subject_class(name):
    for keyword, css in subject_to_class.items():
        if keyword.lower() in name.lower():
            return css
    return "misc"

# Build list of entries with detected color class
entries = [(name, var, detect_subject_class(name)) for name,var in pairs]

# Group by css class
from collections import defaultdict
grouped = defaultdict(list)
for name, var, css in entries:
    grouped[css].append((name,var))

# Pseudo-random shuffle: round-robin from categories
categories = list(grouped.keys())
for g in grouped.values():
    random.shuffle(g)
random.shuffle(categories)

ordered = []
while any(grouped.values()):
    for cat in categories:
        if grouped[cat]:
            ordered.append(grouped[cat].pop())
            
# Create new courseMap.set block
new_block = ["// ---- Reordered courseMap entries (pseudo-random, color balanced) ----"]
for name,var in ordered:
    new_block.append(f'courseMap.set("{name}", {var});')

output_path = "/mnt/data/courseMap_reordered.js"
with open(output_path, "w", encoding="utf-8") as f:
    f.write("\n".join(new_block))

output_path, len(ordered)
