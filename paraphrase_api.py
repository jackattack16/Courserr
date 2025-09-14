from flask import Flask, request, jsonify
import torch
from transformers import BartForConditionalGeneration, BartTokenizer

app = Flask(__name__)

model = BartForConditionalGeneration.from_pretrained('eugenesiow/bart-paraphrase')
tokenizer = BartTokenizer.from_pretrained('eugenesiow/bart-paraphrase')
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model = model.to(device)

@app.route('/paraphrase', methods=['POST'])
def paraphrase():
    data = request.get_json()
    text = data.get('text', '')
    batch = tokenizer(text, return_tensors='pt').to(device)
    generated_ids = model.generate(batch['input_ids'])
    paraphrased = tokenizer.batch_decode(generated_ids, skip_special_tokens=True)[0]
    return jsonify({'paraphrased': paraphrased})

if __name__ == '__main__':
    app.run(port=5000)
