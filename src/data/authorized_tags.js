const userDefinedAuthorizedTags = {
	"group:survey": {
		"description": "survey or overview paper taxonomising the hallucination field"
	},
	"group:detection": {
		"description": "papers proposing methods to detect hallucination in LLM outputs"
	},
	"group:mitigation": {
		"description": "papers proposing strategies to reduce or prevent hallucination"
	},
	"group:evaluation": {
		"description": "papers introducing frameworks or metrics to evaluate factual accuracy"
	},

	"task:hallucination-detection": {
		"description": "detecting hallucinated or non-factual content in generated text"
	},
	"task:fact-checking": {
		"description": "automated verification of claims against evidence sources"
	},
	"task:summarisation": {
		"description": "abstractive summarisation with faithfulness evaluation"
	},
	"task:dialogue": {
		"description": "open-domain dialogue generation with grounding"
	},
	"task:question-answering": {
		"description": "open-domain question answering and factual recall"
	},
	"task:biography-generation": {
		"description": "long-form factual biography generation evaluated for precision"
	},
	"task:self-consistency": {
		"description": "repeated sampling to probe model uncertainty and consistency"
	},
	"task:atomic-evaluation": {
		"description": "decomposing output into atomic claims for fine-grained factual evaluation"
	},

	"method:rag": {
		"description": "retrieval-augmented generation for grounding model outputs"
	},
	"method:nli": {
		"description": "natural language inference used for claim verification or contradiction detection"
	},
	"method:black-box-probing": {
		"description": "detection methods that require no access to model internals or probabilities"
	},
	"method:rlhf": {
		"description": "reinforcement learning from human feedback for alignment"
	},
	"method:prompting": {
		"description": "prompt-based techniques for detection or mitigation"
	},

	"model:gpt": {
		"description": "OpenAI GPT-family models (GPT-3, GPT-3.5, GPT-4)"
	},
	"model:seq2seq": {
		"description": "sequence-to-sequence architectures for generation tasks"
	},
	"model:llm": {
		"description": "large language models in general"
	},

	"dataset:wikibio": {
		"description": "WikiBio dataset used for hallucination detection evaluation"
	},
	"dataset:xsum": {
		"description": "XSum dataset used for abstractive summarisation faithfulness evaluation"
	},
	"dataset:fever": {
		"description": "FEVER fact verification benchmark"
	},
	"dataset:wizard-of-wikipedia": {
		"description": "Wizard of Wikipedia dialogue grounding dataset"
	},

	"hallucination:intrinsic": {
		"description": "hallucination that contradicts the source document"
	},
	"hallucination:extrinsic": {
		"description": "hallucination that introduces content not present in the source"
	},
	"hallucination:factual": {
		"description": "departure from real-world facts"
	},
	"hallucination:faithfulness": {
		"description": "departure from user instruction or provided context"
	},
	"hallucination:self-contradiction": {
		"description": "logically inconsistent claims within a single output or conversation"
	}
};	