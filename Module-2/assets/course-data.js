"use strict";
window.COURSE = {
  "parts": {
    "1": [
      "Understanding Word Structure",
      "Word Structure",
      "#2463eb",
      "What is inside a word?",
      "3–9"
    ],
    "2": [
      "Understanding Word Forms",
      "Word Forms",
      "#14805e",
      "Are all word changes doing the same job?",
      "10–17"
    ],
    "3": [
      "Processing Word Forms by Computer",
      "Computer Processing",
      "#b56a09",
      "Which paths can a word machine follow?",
      "18–28"
    ],
    "4": [
      "Finding Information in Sentences",
      "Sentence Information",
      "#d63e65",
      "Who, which organization, where, and when?",
      "29–36"
    ],
    "5": [
      "Making Better NLP Decisions",
      "NLP Decisions",
      "#7950c9",
      "What evidence helps us choose a label?",
      "37–46"
    ]
  },
  "concepts": [
    {
      "part": 1,
      "name": "Morphology",
      "question": "Are happy, unhappy, happiness, and unhappiness connected?",
      "think": "Find the shared meaning before looking at their letters.",
      "example": "unhappiness → un + happy + ness",
      "explanation": "Morphology studies the internal structure and formation of words. Different character strings can have related meanings."
    },
    {
      "part": 1,
      "name": "Morpheme",
      "question": "What information does s add to books?",
      "think": "Try removing the final piece. What changes?",
      "example": "books → book + s; cats → cat + s; played → play + ed",
      "explanation": "A morpheme is the smallest unit carrying meaning or grammatical information. book supplies meaning; -s supplies plural information."
    },
    {
      "part": 1,
      "name": "Root, prefix, and suffix",
      "question": "Where are the meaningful pieces in unhelpful?",
      "think": "Look before and after the central meaning.",
      "example": "un | help | ful; replayed → re + play + ed; careless → care + less",
      "explanation": "The root carries the central meaning. A prefix comes before it and a suffix after it. Some words have several suffixes."
    },
    {
      "part": 1,
      "name": "Why morphology matters",
      "question": "Would an exact search for play find playing?",
      "think": "Imagine searching play football in a document containing Sara is playing football.",
      "example": "play ≠ playing as character strings; playing → play + ing",
      "explanation": "Recognizing related forms helps search, translation, text analysis, summarization, chatbots, spelling and grammar tools, and multilingual NLP."
    },
    {
      "part": 2,
      "name": "Inflection",
      "question": "Does played name a new action, or a form of play?",
      "think": "Compare a grammatical change with a new dictionary word.",
      "example": "play → plays → played → playing; book → books; walk → walked",
      "explanation": "Inflection changes grammatical form without creating a new lexical item. plays is third-person singular present; books is plural."
    },
    {
      "part": 2,
      "name": "Derivation",
      "question": "Is a teacher the same kind of thing as teach?",
      "think": "Name the grammatical category before and after.",
      "example": "teach → teacher (verb → noun); happy → happiness (adjective → noun); care → careless; use → useful; create → creation",
      "explanation": "Derivation creates a new related word and may change grammatical category. It need not always change category: happy → unhappy remains an adjective."
    },
    {
      "part": 2,
      "name": "Morphological diversity",
      "question": "Can English word rules work unchanged in every language?",
      "think": "Compare adding an ending with changing the inside of a word.",
      "example": "English book → books; Arabic kitāb → kutub; German Buch → Bücher; Turkish ev → evler",
      "explanation": "Languages express number, gender, case, person, and tense in different ways. Multilingual NLP needs language-appropriate patterns."
    },
    {
      "part": 2,
      "name": "Morphological paradigm",
      "question": "Must a computer memorize play, played, and playing as unrelated strings?",
      "think": "Organize the forms by their grammatical jobs.",
      "example": "play / plays / played / playing; walk / walks / walked / walking",
      "explanation": "A morphological paradigm is an organized set of related grammatical forms of a word. It exposes systematic relationships."
    },
    {
      "part": 2,
      "name": "Regular and irregular forms",
      "question": "talk → talked, work → worked, but go → what?",
      "think": "Predict a form, then ask whether your rule always works.",
      "example": "talk → talking; work → worked; go → went",
      "explanation": "Language has regular patterns and irregular forms. A simple add-ed rule overgeneralizes to goed. Lexical information or richer learning is needed."
    },
    {
      "part": 3,
      "name": "Finite-State Machine",
      "question": "Can our word machine accept play + xyz?",
      "think": "Trace only allowed arrows from the start to a final state.",
      "example": "START → play → ed → FINAL; play + xyz is rejected",
      "explanation": "An FSM has a finite set of states and allowed transitions. A state represents a stage; a transition is a permitted move. Reaching a final state accepts the input."
    },
    {
      "part": 3,
      "name": "Finite-State Morphology",
      "question": "What changes when our state machine works specifically with words?",
      "think": "Connect a general computational tool to an NLP task.",
      "example": "play + s → plays; play + ed → played; play + ing → playing",
      "explanation": "Finite-state morphology applies finite-state methods to word analysis and generation. Appropriate lexical rules can handle irregulars too."
    },
    {
      "part": 3,
      "name": "Morphological analysis",
      "question": "When we receive books and return book + s, which direction are we going?",
      "think": "Start with a complete word and uncover its information.",
      "example": "played → root play, suffix ed, past form; playing → play + ing; cars → car + s",
      "explanation": "Analysis maps WORD → INFORMATION: possible root, affixes, and grammatical information. A word may allow more than one analysis."
    },
    {
      "part": 3,
      "name": "Morphological generation",
      "question": "When we receive walk + ed, what must the computer build?",
      "think": "Start with pieces or grammatical features.",
      "example": "walk + ed → walked; teach + er → teacher; happy + ness → happiness",
      "explanation": "Generation maps INFORMATION → WORD. It may need spelling rules as well as concatenation."
    },
    {
      "part": 3,
      "name": "Automatic morphology learning",
      "question": "What repeats in play/played/playing and walk/walked/walking?",
      "think": "Compare many examples rather than writing a rule first.",
      "example": "play → played; walk → walked; talk → talked; work → worked; then jump → jumped",
      "explanation": "Automatic morphology learning discovers useful word patterns from data. Repeated -ed and -ing endings are clues. A small sample does not establish a universal rule."
    },
    {
      "part": 3,
      "name": "Rule-based vs automatic learning",
      "question": "Would you want to write thousands of rules for every language?",
      "think": "Who supplies the pattern: the human or the data?",
      "example": "Human gives rules → computer applies them. Human gives examples → computer discovers patterns.",
      "explanation": "Rule-based systems use explicit human rules. Learning systems infer patterns from examples. Both can fail when their rules or data miss important cases."
    },
    {
      "part": 4,
      "name": "Shallow parsing / chunking",
      "question": "Which words belong together in the smart student completed the difficult project?",
      "think": "Group useful phrases without building a complete grammar tree.",
      "example": "[The smart student] NP → [completed] VP → [the difficult project] NP",
      "explanation": "Shallow parsing, or chunking, identifies useful groups without a complete deep grammatical analysis. A noun phrase acts as a noun; a verb phrase is centered on a verb."
    },
    {
      "part": 4,
      "name": "Named Entity Recognition",
      "question": "Can we extract who, which organization, where, and when?",
      "think": "Look for named real-world information rather than ordinary phrases.",
      "example": "Dr. Sara joined Microsoft in Dubai on Monday. Sara: PERSON; Microsoft: ORGANIZATION; Dubai: LOCATION; Monday: DATE.",
      "explanation": "NER identifies and classifies named entities. It converts text into structured information useful for search, question answering, and organizing large collections such as 10,000 news articles."
    },
    {
      "part": 4,
      "name": "O and entity sequences",
      "question": "In Ahmed works at ABC Bank in Dubai, is every token an entity?",
      "think": "What label should ordinary connecting words receive?",
      "example": "Ahmed/PER works/O at/O ABC/ORG Bank/ORG in/O Dubai/LOC",
      "explanation": "O means outside any named entity in the chosen annotation scheme. Multiword names may span several tokens. PER, ORG, and LOC abbreviate the full category names."
    },
    {
      "part": 4,
      "name": "Context and ambiguity",
      "question": "Jordan: person or location?",
      "think": "Ask for the surrounding sentence before deciding.",
      "example": "I travelled to Jordan. / Jordan submitted the assignment. Apple opened a new office. / I ate an apple.",
      "explanation": "Context changes interpretation. Jordan can name a country or a person; Apple can name an organization while apple can be ordinary fruit."
    },
    {
      "part": 4,
      "name": "Chunking vs NER",
      "question": "Does finding a noun phrase tell us it is a named person?",
      "think": "Compare the questions each task answers.",
      "example": "the smart student → NP; Sara → PERSON",
      "explanation": "Chunking asks which words belong together. NER asks which named things appear and what their categories are. The tasks are related but solve different problems."
    },
    {
      "part": 5,
      "name": "Limits of simple rules",
      "question": "Why does capitalized word → PERSON fail?",
      "think": "Test the same rule on a person, a place, and a company.",
      "example": "Ahmed arrived. ✓ Dubai is beautiful. ✗ Microsoft released a product. ✗",
      "explanation": "Capitalization alone cannot identify entity type. The model needs more evidence."
    },
    {
      "part": 5,
      "name": "Features",
      "question": "What clues help label Dubai in Sara travelled to Dubai?",
      "think": "Inspect the word, its neighbors, and its shape.",
      "example": "Current word: Dubai; previous: to; capitalized: yes; nearby: travelled. For Microsoft, works at is another clue.",
      "explanation": "Features are useful input information for a decision. Current, previous, next, nearby words, and word shape can all help. No single clue guarantees the answer."
    },
    {
      "part": 5,
      "name": "Maximum Entropy model",
      "question": "How could a model combine several clues?",
      "think": "Think about uncertainty over possible labels.",
      "example": "She lives in Dubai. Illustrative probabilities: Person 0.05, Organization 0.05, Location 0.90.",
      "explanation": "A Maximum Entropy classifier combines weighted features to estimate probabilities for labels. In this lesson, editable probabilities are an educational simulation, not a trained model."
    },
    {
      "part": 5,
      "name": "Argmax",
      "question": "Which label wins with probabilities 0.05, 0.05, and 0.90?",
      "think": "Choose the label with the greatest value.",
      "example": "Person 0.05; Organization 0.05; Location 0.90 → LOCATION",
      "explanation": "Argmax returns the label with the highest probability. It chooses a label, not the numerical probability itself. High confidence does not guarantee correctness."
    },
    {
      "part": 5,
      "name": "Random fields",
      "question": "Can labels have relationships with other labels?",
      "think": "Imagine variables connected to their neighbors.",
      "example": "New ↔ York ↔ University",
      "explanation": "A random field models relationships among variables. In a sequence, relationships can connect neighboring label variables."
    },
    {
      "part": 5,
      "name": "CRF and sequence labeling",
      "question": "Should New, York, and University be labeled independently?",
      "think": "Consider whether these words name one organization together.",
      "example": "Ahmed/PER works/O at/O New/ORG York/ORG University/ORG",
      "explanation": "A Conditional Random Field models a label sequence conditioned on the observed input. A linear-chain CRF combines input features and neighboring label relationships to select a sequence jointly."
    },
    {
      "part": 5,
      "name": "Maximum Entropy vs CRF",
      "question": "When do we need one label, and when do we need a consistent sequence?",
      "think": "Compare a single Dubai decision with a multiword organization.",
      "example": "Maximum Entropy: features → probabilities → one label. CRF: features + neighboring labels → label sequence.",
      "explanation": "The standalone Maximum Entropy classifier here makes a local decision. CRF accounts for label dependencies across a sequence. It does not simply copy the previous label, and it does not guarantee correct output."
    }
  ],
  "coding": {
    "1": "Create a simple Python Streamlit app called Word X-Ray. Accept an English word. Use a small predefined set of prefixes and suffixes to display its possible prefix, root, and suffix visually. Explain what each part adds.",
    "2": "Extend the SAME Word X-Ray app. Preserve Part 1. Add inflection/derivation classification and a Word Family section. Explain the new code separately. Test played, books, teacher, happiness, playing, and go.",
    "3": "Extend the SAME app with Morphological Analysis and Generation modes. Generate base, third-person singular, past, ing-form, and noun plural when appropriate. Test played, playing, books, play + past, play + ing, book + plural. Then try went and go + past. Explain why a simple suffix rule fails.",
    "4": "Extend the SAME app with a Sentence Analyzer for chunking and NER (Person, Organization, Location, Date). Explain which function performs each task. Test Sara joined Microsoft in Dubai on Monday; Apple opened a new office; I ate an apple.",
    "5": "Extend the SAME Sentence Analyzer to show features for a selected token, illustrative Person/Organization/Location probabilities, the argmax label, and a token-label sequence. Clearly label the probabilities as an educational simulation, not a real NER model output."
  },
  "questions": [
    {
      "id": "q01",
      "part": 1,
      "kind": "Multiple choice",
      "prompt": "What does morphology study?",
      "answer": "Internal structure and formation of words",
      "choices": [
        "Internal structure and formation of words",
        "Only sentence order",
        "Only sound volume",
        "Only named people"
      ],
      "concept": "Morphology",
      "why": "Morphology looks at meaningful word structure.",
      "example": "unhappiness → un + happy + ness"
    },
    {
      "id": "q02",
      "part": 1,
      "kind": "Multiple choice",
      "prompt": "What is the root of unhelpful?",
      "answer": "help",
      "choices": [
        "un",
        "ful",
        "unhelp",
        "help"
      ],
      "concept": "Root, prefix, and suffix",
      "why": "help carries the central meaning; un- and -ful modify it.",
      "example": "un | help | ful"
    },
    {
      "id": "q03",
      "part": 1,
      "kind": "Multiple choice",
      "prompt": "Which part of books expresses plural number?",
      "answer": "s",
      "choices": [
        "boo",
        "The whole sentence",
        "s",
        "book"
      ],
      "concept": "Morpheme",
      "why": "The suffix -s adds grammatical information meaning more than one.",
      "example": "cat + s → cats"
    },
    {
      "id": "q04",
      "part": 1,
      "kind": "True / False",
      "prompt": "A morpheme can carry grammatical information.",
      "answer": "True",
      "choices": [
        "False",
        "True"
      ],
      "concept": "Morpheme",
      "why": "A morpheme need not name an object; it can mark grammar.",
      "example": "-ed in played marks a past/participle form."
    },
    {
      "id": "q05",
      "part": 1,
      "kind": "True / False",
      "prompt": "Every word has both a prefix and a suffix.",
      "answer": "False",
      "choices": [
        "False",
        "True"
      ],
      "concept": "Root, prefix, and suffix",
      "why": "A word can consist of a root alone or only one kind of affix.",
      "example": "book has no prefix; books has a suffix."
    },
    {
      "id": "q06",
      "part": 1,
      "kind": "Identify the Concept",
      "prompt": "Name the meaningful piece added before a root.",
      "answer": "Prefix",
      "choices": [
        "Suffix",
        "Paradigm",
        "Chunk",
        "Prefix"
      ],
      "concept": "Root, prefix, and suffix",
      "why": "Prefixes occur before the root.",
      "example": "re- in replaying means again."
    },
    {
      "id": "q07",
      "part": 1,
      "kind": "Identify the Concept",
      "prompt": "Name the smallest unit carrying meaning or grammar.",
      "answer": "Morpheme",
      "choices": [
        "Probability",
        "State",
        "Morpheme",
        "Sentence"
      ],
      "concept": "Morpheme",
      "why": "Morphemes are meaningful or grammatical building blocks.",
      "example": "book and -s are morphemes in books."
    },
    {
      "id": "q08",
      "part": 1,
      "kind": "Practical scenario",
      "prompt": "A search for play football misses Sara is playing football. What helps?",
      "answer": "Recognize related word forms",
      "choices": [
        "Use capitalization only",
        "Recognize related word forms",
        "Treat every spelling as unrelated",
        "Label football as a date"
      ],
      "concept": "Why morphology matters",
      "why": "Morphological analysis can connect playing with play.",
      "example": "playing → play + ing"
    },
    {
      "id": "q09",
      "part": 2,
      "kind": "Multiple choice",
      "prompt": "Which change is inflection?",
      "answer": "play → played",
      "choices": [
        "play → played",
        "teach → teacher",
        "happy → happiness",
        "care → careless"
      ],
      "concept": "Inflection",
      "why": "The same basic verb receives grammatical information.",
      "example": "book → books is another inflection."
    },
    {
      "id": "q10",
      "part": 2,
      "kind": "Multiple choice",
      "prompt": "Which change creates a noun from an adjective?",
      "answer": "happy → happiness",
      "choices": [
        "book → books",
        "play → playing",
        "walk → walked",
        "happy → happiness"
      ],
      "concept": "Derivation",
      "why": "-ness creates a related noun naming a state.",
      "example": "happy is an adjective; happiness is a noun."
    },
    {
      "id": "q11",
      "part": 2,
      "kind": "Multiple choice",
      "prompt": "What is the missing form: go, goes, __, going?",
      "answer": "went",
      "choices": [
        "goinged",
        "gos",
        "went",
        "goed"
      ],
      "concept": "Regular and irregular forms",
      "why": "go has an irregular past form.",
      "example": "walk → walked follows a regular pattern; go → went does not."
    },
    {
      "id": "q12",
      "part": 2,
      "kind": "True / False",
      "prompt": "Derivation must always change grammatical category.",
      "answer": "False",
      "choices": [
        "True",
        "False"
      ],
      "concept": "Derivation",
      "why": "Derivation may change category, but does not have to.",
      "example": "happy → unhappy: both are adjectives."
    },
    {
      "id": "q13",
      "part": 2,
      "kind": "True / False",
      "prompt": "All languages form plurals by adding English -s.",
      "answer": "False",
      "choices": [
        "False",
        "True"
      ],
      "concept": "Morphological diversity",
      "why": "Languages use different endings or internal patterns.",
      "example": "Arabic kitāb → kutub changes the internal pattern."
    },
    {
      "id": "q14",
      "part": 2,
      "kind": "Identify the Concept",
      "prompt": "Name an organized set such as play, plays, played, playing.",
      "answer": "Morphological paradigm",
      "choices": [
        "Named entity",
        "Random field",
        "Prefix",
        "Morphological paradigm"
      ],
      "concept": "Morphological paradigm",
      "why": "The forms are organized by their grammatical functions.",
      "example": "walk, walks, walked, walking form another paradigm."
    },
    {
      "id": "q15",
      "part": 2,
      "kind": "Identify the Concept",
      "prompt": "Name the idea that languages express word information differently.",
      "answer": "Morphological diversity",
      "choices": [
        "Shallow parsing",
        "Generation",
        "Morphological diversity",
        "Argmax"
      ],
      "concept": "Morphological diversity",
      "why": "One language’s word rules do not cover every language.",
      "example": "English book/books; German Buch/Bücher."
    },
    {
      "id": "q16",
      "part": 2,
      "kind": "Practical scenario",
      "prompt": "A program treats teacher as just the past form of teach. What should you explain?",
      "answer": "Teacher is a derived noun",
      "choices": [
        "Teacher has no relationship to teach",
        "Teacher is a derived noun",
        "Teacher is a plural verb",
        "All suffixes mean past"
      ],
      "concept": "Derivation",
      "why": "teach → teacher creates a related lexical item and changes verb to noun.",
      "example": "play → played keeps the same basic verb."
    },
    {
      "id": "q17",
      "part": 3,
      "kind": "Multiple choice",
      "prompt": "Which path does the tiny play FSM reject?",
      "answer": "START → play → xyz",
      "choices": [
        "START → play → xyz",
        "START → play → s → FINAL",
        "START → play → ed → FINAL",
        "START → play → ing → FINAL"
      ],
      "concept": "Finite-State Machine",
      "why": "xyz is not an allowed transition in this machine.",
      "example": "play + ed is accepted as played."
    },
    {
      "id": "q18",
      "part": 3,
      "kind": "Multiple choice",
      "prompt": "What is morphological analysis?",
      "answer": "Word → information",
      "choices": [
        "Information → word",
        "Labels → news articles",
        "A capital → a person",
        "Word → information"
      ],
      "concept": "Morphological analysis",
      "why": "Analysis starts with a surface word and finds its structure or features.",
      "example": "books → book + s, plural"
    },
    {
      "id": "q19",
      "part": 3,
      "kind": "Multiple choice",
      "prompt": "What does automatic morphology learning use to find patterns?",
      "answer": "Examples and data",
      "choices": [
        "Only one capitalization rule",
        "Random answers",
        "Examples and data",
        "Only hand-written rules"
      ],
      "concept": "Automatic morphology learning",
      "why": "Repeated patterns in data can suggest word-building rules.",
      "example": "play/played and walk/walked suggest -ed."
    },
    {
      "id": "q20",
      "part": 3,
      "kind": "True / False",
      "prompt": "An FSM has a finite set of states and allowed transitions.",
      "answer": "True",
      "choices": [
        "False",
        "True"
      ],
      "concept": "Finite-State Machine",
      "why": "Its structure limits which paths are accepted.",
      "example": "A final state accepts play + ing."
    },
    {
      "id": "q21",
      "part": 3,
      "kind": "True / False",
      "prompt": "Finite-state methods can never handle irregular words.",
      "answer": "False",
      "choices": [
        "False",
        "True"
      ],
      "concept": "Finite-State Morphology",
      "why": "Suitable lexical information and rules can represent irregular mappings.",
      "example": "A lexicon can map go + past to went."
    },
    {
      "id": "q22",
      "part": 3,
      "kind": "Identify the Concept",
      "prompt": "Name the task that turns root play plus past into played.",
      "answer": "Morphological generation",
      "choices": [
        "Morphological analysis",
        "NER",
        "Chunking",
        "Morphological generation"
      ],
      "concept": "Morphological generation",
      "why": "Generation builds a word from supplied information.",
      "example": "book + plural → books"
    },
    {
      "id": "q23",
      "part": 3,
      "kind": "Identify the Concept",
      "prompt": "Name a permitted move from one FSM state to another.",
      "answer": "Transition",
      "choices": [
        "Probability",
        "Corpus",
        "Transition",
        "Entity"
      ],
      "concept": "Finite-State Machine",
      "why": "A transition is an allowed step in the machine.",
      "example": "The -ed transition leads toward acceptance."
    },
    {
      "id": "q24",
      "part": 3,
      "kind": "Practical scenario",
      "prompt": "Your learned add-ed pattern produces goed. What should you conclude?",
      "answer": "The pattern needs irregular lexical information or richer data",
      "choices": [
        "Learning guarantees correctness",
        "The pattern needs irregular lexical information or richer data",
        "All past forms are wrong",
        "went has the suffix ed"
      ],
      "concept": "Rule-based vs automatic learning",
      "why": "A pattern learned from regular examples can overgeneralize.",
      "example": "go → went is an exception to simple concatenation."
    },
    {
      "id": "q25",
      "part": 4,
      "kind": "Multiple choice",
      "prompt": "Which phrase is an NP in the slide sentence?",
      "answer": "The smart student",
      "choices": [
        "The smart student",
        "completed",
        "on",
        "quickly"
      ],
      "concept": "Shallow parsing / chunking",
      "why": "The group acts as a noun phrase.",
      "example": "the difficult project is the other NP."
    },
    {
      "id": "q26",
      "part": 4,
      "kind": "Multiple choice",
      "prompt": "What label fits Monday in Sara joined Microsoft on Monday?",
      "answer": "DATE",
      "choices": [
        "PERSON",
        "ORGANIZATION",
        "LOCATION",
        "DATE"
      ],
      "concept": "Named Entity Recognition",
      "why": "Monday names a day and provides temporal information.",
      "example": "Dubai is a LOCATION in the course example."
    },
    {
      "id": "q27",
      "part": 4,
      "kind": "Multiple choice",
      "prompt": "What does O mean in entity labeling?",
      "answer": "Outside an entity",
      "choices": [
        "Object noun",
        "Only a person",
        "Outside an entity",
        "Organization"
      ],
      "concept": "O and entity sequences",
      "why": "O labels tokens outside the chosen entity categories.",
      "example": "works and at receive O in Ahmed works at ABC Bank."
    },
    {
      "id": "q28",
      "part": 4,
      "kind": "True / False",
      "prompt": "Shallow parsing requires a full deep grammatical analysis.",
      "answer": "False",
      "choices": [
        "True",
        "False"
      ],
      "concept": "Shallow parsing / chunking",
      "why": "Chunking finds useful groups without building a complete deep parse.",
      "example": "[The smart student] [completed] [the difficult project]"
    },
    {
      "id": "q29",
      "part": 4,
      "kind": "True / False",
      "prompt": "The same spelling can receive different NER labels in different contexts.",
      "answer": "True",
      "choices": [
        "True",
        "False"
      ],
      "concept": "Context and ambiguity",
      "why": "Context helps distinguish the meaning of an ambiguous name.",
      "example": "Jordan is a location after travelled to, a person before submitted."
    },
    {
      "id": "q30",
      "part": 4,
      "kind": "Identify the Concept",
      "prompt": "Name the task that labels Sara as PERSON and Microsoft as ORGANIZATION.",
      "answer": "Named Entity Recognition",
      "choices": [
        "Inflection",
        "Generation",
        "Argmax",
        "Named Entity Recognition"
      ],
      "concept": "Named Entity Recognition",
      "why": "NER extracts and categorizes named information.",
      "example": "Dubai → LOCATION"
    },
    {
      "id": "q31",
      "part": 4,
      "kind": "Identify the Concept",
      "prompt": "Name the task that groups words into NP and VP chunks.",
      "answer": "Shallow parsing",
      "choices": [
        "Maximum Entropy",
        "Derivation",
        "Shallow parsing",
        "Morphological diversity"
      ],
      "concept": "Shallow parsing / chunking",
      "why": "Chunking groups related words by phrase type.",
      "example": "completed is the VP in the slide example."
    },
    {
      "id": "q32",
      "part": 4,
      "kind": "Practical scenario",
      "prompt": "Apple opened an office. I ate an apple. Why do labels differ?",
      "answer": "Context distinguishes the company from fruit",
      "choices": [
        "O means organization",
        "Context distinguishes the company from fruit",
        "Every apple is an organization",
        "Only word length matters"
      ],
      "concept": "Context and ambiguity",
      "why": "A company name is an entity; an ordinary fruit mention is not a named entity here.",
      "example": "Jordan can similarly name a person or country."
    },
    {
      "id": "q33",
      "part": 5,
      "kind": "Multiple choice",
      "prompt": "Why does capitalized word → PERSON fail on Dubai?",
      "answer": "Capitalization does not determine entity type",
      "choices": [
        "Capitalization does not determine entity type",
        "Dubai is not capitalized",
        "Every place is a person",
        "Rules cannot be executed"
      ],
      "concept": "Limits of simple rules",
      "why": "Many places and organizations are capitalized too.",
      "example": "Microsoft is an organization, not a person."
    },
    {
      "id": "q34",
      "part": 5,
      "kind": "Multiple choice",
      "prompt": "Person .05, Organization .05, Location .90: what does argmax return?",
      "answer": "Location",
      "choices": [
        "0.05",
        "Person",
        "All labels equally",
        "Location"
      ],
      "concept": "Argmax",
      "why": "Location has the greatest probability; argmax selects its label.",
      "example": "With ORG .90, argmax would select Organization."
    },
    {
      "id": "q35",
      "part": 5,
      "kind": "Multiple choice",
      "prompt": "What does a CRF add to this lesson’s standalone local classifier?",
      "answer": "Relationships between neighboring labels",
      "choices": [
        "Only capitalization",
        "Removal of all features",
        "Relationships between neighboring labels",
        "A guarantee of perfect labels"
      ],
      "concept": "CRF and sequence labeling",
      "why": "A CRF selects a sequence using input features and label dependencies.",
      "example": "New York University can be labeled as one organization."
    },
    {
      "id": "q36",
      "part": 5,
      "kind": "True / False",
      "prompt": "Displayed probabilities in this website come from a trained Maximum Entropy model.",
      "answer": "False",
      "choices": [
        "True",
        "False"
      ],
      "concept": "Maximum Entropy model",
      "why": "The probability controls are explicitly an educational simulation.",
      "example": "0.05, 0.05, 0.90 illustrates uncertainty and selection."
    },
    {
      "id": "q37",
      "part": 5,
      "kind": "True / False",
      "prompt": "A random field models relationships among variables.",
      "answer": "True",
      "choices": [
        "True",
        "False"
      ],
      "concept": "Random fields",
      "why": "Variables can be connected rather than treated independently.",
      "example": "Neighboring entity-label variables in a sequence can interact."
    },
    {
      "id": "q38",
      "part": 5,
      "kind": "Identify the Concept",
      "prompt": "Name an input clue such as previous word = to.",
      "answer": "Feature",
      "choices": [
        "Suffix",
        "Final state",
        "Paradigm",
        "Feature"
      ],
      "concept": "Features",
      "why": "A feature supplies evidence for a model decision.",
      "example": "Capitalized = Yes is another feature for Dubai."
    },
    {
      "id": "q39",
      "part": 5,
      "kind": "Identify the Concept",
      "prompt": "Name the classifier that combines weighted features to produce label probabilities.",
      "answer": "Maximum Entropy model",
      "choices": [
        "Morpheme",
        "Noun phrase",
        "Maximum Entropy model",
        "FSM recognizer"
      ],
      "concept": "Maximum Entropy model",
      "why": "The classifier uses evidence to estimate probabilities over labels.",
      "example": "Dubai can have a high illustrative Location probability."
    },
    {
      "id": "q40",
      "part": 5,
      "kind": "Practical scenario",
      "prompt": "A local system labels New, York, University as unrelated O tokens. What can help?",
      "answer": "Joint sequence labeling with context and label relationships",
      "choices": [
        "Use only the last letter",
        "Joint sequence labeling with context and label relationships",
        "Always label every capitalized token PERSON",
        "Delete neighboring words"
      ],
      "concept": "CRF and sequence labeling",
      "why": "The words together name an organization; sequence modeling can use that relationship.",
      "example": "Ahmed/PER works/O at/O New/ORG York/ORG University/ORG"
    }
  ],
  "final": [
    {
      "id": "q01",
      "part": 1,
      "kind": "Multiple choice",
      "prompt": "What does morphology study?",
      "answer": "Internal structure and formation of words",
      "choices": [
        "Internal structure and formation of words",
        "Only sentence order",
        "Only sound volume",
        "Only named people"
      ],
      "concept": "Morphology",
      "why": "Morphology looks at meaningful word structure.",
      "example": "unhappiness → un + happy + ness"
    },
    {
      "id": "q02",
      "part": 1,
      "kind": "Multiple choice",
      "prompt": "What is the root of unhelpful?",
      "answer": "help",
      "choices": [
        "un",
        "ful",
        "unhelp",
        "help"
      ],
      "concept": "Root, prefix, and suffix",
      "why": "help carries the central meaning; un- and -ful modify it.",
      "example": "un | help | ful"
    },
    {
      "id": "q04",
      "part": 1,
      "kind": "True / False",
      "prompt": "A morpheme can carry grammatical information.",
      "answer": "True",
      "choices": [
        "False",
        "True"
      ],
      "concept": "Morpheme",
      "why": "A morpheme need not name an object; it can mark grammar.",
      "example": "-ed in played marks a past/participle form."
    },
    {
      "id": "q08",
      "part": 1,
      "kind": "Practical scenario",
      "prompt": "A search for play football misses Sara is playing football. What helps?",
      "answer": "Recognize related word forms",
      "choices": [
        "Use capitalization only",
        "Recognize related word forms",
        "Treat every spelling as unrelated",
        "Label football as a date"
      ],
      "concept": "Why morphology matters",
      "why": "Morphological analysis can connect playing with play.",
      "example": "playing → play + ing"
    },
    {
      "id": "q09",
      "part": 2,
      "kind": "Multiple choice",
      "prompt": "Which change is inflection?",
      "answer": "play → played",
      "choices": [
        "play → played",
        "teach → teacher",
        "happy → happiness",
        "care → careless"
      ],
      "concept": "Inflection",
      "why": "The same basic verb receives grammatical information.",
      "example": "book → books is another inflection."
    },
    {
      "id": "q10",
      "part": 2,
      "kind": "Multiple choice",
      "prompt": "Which change creates a noun from an adjective?",
      "answer": "happy → happiness",
      "choices": [
        "book → books",
        "play → playing",
        "walk → walked",
        "happy → happiness"
      ],
      "concept": "Derivation",
      "why": "-ness creates a related noun naming a state.",
      "example": "happy is an adjective; happiness is a noun."
    },
    {
      "id": "q12",
      "part": 2,
      "kind": "True / False",
      "prompt": "Derivation must always change grammatical category.",
      "answer": "False",
      "choices": [
        "True",
        "False"
      ],
      "concept": "Derivation",
      "why": "Derivation may change category, but does not have to.",
      "example": "happy → unhappy: both are adjectives."
    },
    {
      "id": "q16",
      "part": 2,
      "kind": "Practical scenario",
      "prompt": "A program treats teacher as just the past form of teach. What should you explain?",
      "answer": "Teacher is a derived noun",
      "choices": [
        "Teacher has no relationship to teach",
        "Teacher is a derived noun",
        "Teacher is a plural verb",
        "All suffixes mean past"
      ],
      "concept": "Derivation",
      "why": "teach → teacher creates a related lexical item and changes verb to noun.",
      "example": "play → played keeps the same basic verb."
    },
    {
      "id": "q17",
      "part": 3,
      "kind": "Multiple choice",
      "prompt": "Which path does the tiny play FSM reject?",
      "answer": "START → play → xyz",
      "choices": [
        "START → play → xyz",
        "START → play → s → FINAL",
        "START → play → ed → FINAL",
        "START → play → ing → FINAL"
      ],
      "concept": "Finite-State Machine",
      "why": "xyz is not an allowed transition in this machine.",
      "example": "play + ed is accepted as played."
    },
    {
      "id": "q18",
      "part": 3,
      "kind": "Multiple choice",
      "prompt": "What is morphological analysis?",
      "answer": "Word → information",
      "choices": [
        "Information → word",
        "Labels → news articles",
        "A capital → a person",
        "Word → information"
      ],
      "concept": "Morphological analysis",
      "why": "Analysis starts with a surface word and finds its structure or features.",
      "example": "books → book + s, plural"
    },
    {
      "id": "q20",
      "part": 3,
      "kind": "True / False",
      "prompt": "An FSM has a finite set of states and allowed transitions.",
      "answer": "True",
      "choices": [
        "False",
        "True"
      ],
      "concept": "Finite-State Machine",
      "why": "Its structure limits which paths are accepted.",
      "example": "A final state accepts play + ing."
    },
    {
      "id": "q24",
      "part": 3,
      "kind": "Practical scenario",
      "prompt": "Your learned add-ed pattern produces goed. What should you conclude?",
      "answer": "The pattern needs irregular lexical information or richer data",
      "choices": [
        "Learning guarantees correctness",
        "The pattern needs irregular lexical information or richer data",
        "All past forms are wrong",
        "went has the suffix ed"
      ],
      "concept": "Rule-based vs automatic learning",
      "why": "A pattern learned from regular examples can overgeneralize.",
      "example": "go → went is an exception to simple concatenation."
    },
    {
      "id": "q25",
      "part": 4,
      "kind": "Multiple choice",
      "prompt": "Which phrase is an NP in the slide sentence?",
      "answer": "The smart student",
      "choices": [
        "The smart student",
        "completed",
        "on",
        "quickly"
      ],
      "concept": "Shallow parsing / chunking",
      "why": "The group acts as a noun phrase.",
      "example": "the difficult project is the other NP."
    },
    {
      "id": "q26",
      "part": 4,
      "kind": "Multiple choice",
      "prompt": "What label fits Monday in Sara joined Microsoft on Monday?",
      "answer": "DATE",
      "choices": [
        "PERSON",
        "ORGANIZATION",
        "LOCATION",
        "DATE"
      ],
      "concept": "Named Entity Recognition",
      "why": "Monday names a day and provides temporal information.",
      "example": "Dubai is a LOCATION in the course example."
    },
    {
      "id": "q28",
      "part": 4,
      "kind": "True / False",
      "prompt": "Shallow parsing requires a full deep grammatical analysis.",
      "answer": "False",
      "choices": [
        "True",
        "False"
      ],
      "concept": "Shallow parsing / chunking",
      "why": "Chunking finds useful groups without building a complete deep parse.",
      "example": "[The smart student] [completed] [the difficult project]"
    },
    {
      "id": "q32",
      "part": 4,
      "kind": "Practical scenario",
      "prompt": "Apple opened an office. I ate an apple. Why do labels differ?",
      "answer": "Context distinguishes the company from fruit",
      "choices": [
        "O means organization",
        "Context distinguishes the company from fruit",
        "Every apple is an organization",
        "Only word length matters"
      ],
      "concept": "Context and ambiguity",
      "why": "A company name is an entity; an ordinary fruit mention is not a named entity here.",
      "example": "Jordan can similarly name a person or country."
    },
    {
      "id": "q33",
      "part": 5,
      "kind": "Multiple choice",
      "prompt": "Why does capitalized word → PERSON fail on Dubai?",
      "answer": "Capitalization does not determine entity type",
      "choices": [
        "Capitalization does not determine entity type",
        "Dubai is not capitalized",
        "Every place is a person",
        "Rules cannot be executed"
      ],
      "concept": "Limits of simple rules",
      "why": "Many places and organizations are capitalized too.",
      "example": "Microsoft is an organization, not a person."
    },
    {
      "id": "q34",
      "part": 5,
      "kind": "Multiple choice",
      "prompt": "Person .05, Organization .05, Location .90: what does argmax return?",
      "answer": "Location",
      "choices": [
        "0.05",
        "Person",
        "All labels equally",
        "Location"
      ],
      "concept": "Argmax",
      "why": "Location has the greatest probability; argmax selects its label.",
      "example": "With ORG .90, argmax would select Organization."
    },
    {
      "id": "q36",
      "part": 5,
      "kind": "True / False",
      "prompt": "Displayed probabilities in this website come from a trained Maximum Entropy model.",
      "answer": "False",
      "choices": [
        "True",
        "False"
      ],
      "concept": "Maximum Entropy model",
      "why": "The probability controls are explicitly an educational simulation.",
      "example": "0.05, 0.05, 0.90 illustrates uncertainty and selection."
    },
    {
      "id": "q40",
      "part": 5,
      "kind": "Practical scenario",
      "prompt": "A local system labels New, York, University as unrelated O tokens. What can help?",
      "answer": "Joint sequence labeling with context and label relationships",
      "choices": [
        "Use only the last letter",
        "Joint sequence labeling with context and label relationships",
        "Always label every capitalized token PERSON",
        "Delete neighboring words"
      ],
      "concept": "CRF and sequence labeling",
      "why": "The words together name an organization; sequence modeling can use that relationship.",
      "example": "Ahmed/PER works/O at/O New/ORG York/ORG University/ORG"
    }
  ],
  "verbs": {
    "play": [
      "play",
      "plays",
      "played",
      "playing"
    ],
    "walk": [
      "walk",
      "walks",
      "walked",
      "walking"
    ],
    "talk": [
      "talk",
      "talks",
      "talked",
      "talking"
    ],
    "work": [
      "work",
      "works",
      "worked",
      "working"
    ],
    "jump": [
      "jump",
      "jumps",
      "jumped",
      "jumping"
    ],
    "go": [
      "go",
      "goes",
      "went",
      "going"
    ],
    "teach": [
      "teach",
      "teaches",
      "taught",
      "teaching"
    ],
    "create": [
      "create",
      "creates",
      "created",
      "creating"
    ],
    "use": [
      "use",
      "uses",
      "used",
      "using"
    ]
  },
  "nouns": [
    "book",
    "car",
    "cat",
    "project",
    "student",
    "teacher"
  ],
  "forms": [
    "base",
    "third-person singular",
    "past",
    "ing-form"
  ],
  "special": {
    "unhappy": [
      "un",
      "happy",
      "",
      "Derivation",
      "un- means not; happy supplies the central meaning."
    ],
    "happiness": [
      "",
      "happy",
      "ness",
      "Derivation",
      "-ness forms a noun naming a state; y changes to i."
    ],
    "unhappiness": [
      "un",
      "happy",
      "ness",
      "Derivation",
      "un- means not; -ness names a state; happy becomes happi before -ness."
    ],
    "unhelpful": [
      "un",
      "help",
      "ful",
      "Derivation",
      "helpful means giving help; un- reverses that meaning."
    ],
    "helpful": [
      "",
      "help",
      "ful",
      "Derivation",
      "-ful forms an adjective: giving help."
    ],
    "teacher": [
      "",
      "teach",
      "er",
      "Derivation",
      "-er names a person who teaches. Verb → noun."
    ],
    "teachers": [
      "",
      "teach",
      "er + s",
      "Derivation + Inflection",
      "teach → teacher creates a noun; teacher → teachers adds plural information."
    ],
    "replaying": [
      "re",
      "play",
      "ing",
      "Derivation + Inflection",
      "re- means again; -ing marks the ing-form."
    ],
    "replayed": [
      "re",
      "play",
      "ed",
      "Derivation + Inflection",
      "re- means again; -ed marks a past/participle form."
    ],
    "careless": [
      "",
      "care",
      "less",
      "Derivation",
      "-less means without; careless is an adjective."
    ],
    "useful": [
      "",
      "use",
      "ful",
      "Derivation",
      "-ful forms an adjective meaning having a use."
    ],
    "creation": [
      "",
      "create",
      "ion",
      "Derivation",
      "create → creation forms a noun with a spelling change."
    ],
    "unfriendliness": [
      "un",
      "friend",
      "ly + ness",
      "Derivation",
      "friend → friendly → unfriendly → unfriendliness; -ly forms an adjective here, -ness a noun. y changes to i."
    ]
  },
  "phrases": {
    "new york university": "ORG",
    "abc bank": "ORG",
    "amity university": "ORG",
    "abu dhabi": "LOC",
    "new york": "LOC"
  },
  "lexicon": {
    "sara": "PER",
    "ahmed": "PER",
    "microsoft": "ORG",
    "dubai": "LOC",
    "monday": "DATE",
    "tuesday": "DATE",
    "friday": "DATE"
  },
  "sentences": [
    "The smart student completed the difficult project.",
    "Dr. Sara joined Microsoft in Dubai on Monday.",
    "Ahmed works at ABC Bank in Dubai.",
    "I travelled to Jordan.",
    "Jordan submitted the assignment.",
    "Apple opened a new office.",
    "I ate an apple.",
    "The new AI system analyzed the medical report.",
    "Prof. Ahmed presented his research in Abu Dhabi.",
    "The young researcher presented the new paper.",
    "Dr. Sara is teaching NLP at Amity University in Dubai.",
    "Ahmed works at New York University.",
    "Sara travelled to Dubai.",
    "Ahmed works at Microsoft.",
    "She lives in Dubai."
  ],
  "chunks": {
    "The smart student completed the difficult project.": [
      [
        "The smart student",
        "NP"
      ],
      [
        "completed",
        "VP"
      ],
      [
        "the difficult project",
        "NP"
      ],
      [
        ".",
        "O"
      ]
    ],
    "The new AI system analyzed the medical report.": [
      [
        "The new AI system",
        "NP"
      ],
      [
        "analyzed",
        "VP"
      ],
      [
        "the medical report",
        "NP"
      ],
      [
        ".",
        "O"
      ]
    ],
    "The young researcher presented the new paper.": [
      [
        "The young researcher",
        "NP"
      ],
      [
        "presented",
        "VP"
      ],
      [
        "the new paper",
        "NP"
      ],
      [
        ".",
        "O"
      ]
    ]
  },
  "slides": [
    {
      "slide": 1,
      "text": "CSE447 – Introduction to Natural Language ProcessingModule 2 – Words and Word Forms\nFrom Words to Useful Information\nPart 1 — Understanding Word StructureMorphology • Morphemes • Root • Prefix • Suffix\nPart 2 — Understanding Word FormsInflection • Derivation • Morphological Diversity • Paradigms\nPart 3 — Processing Word Forms by ComputerFSM • Finite-State Morphology • Analysis & Generation • Automatic Morphology Learning\nPart 4 — Finding Information in SentencesShallow Parsing • Named Entity Recognition (NER)\nPart 5 — Making Better NLP DecisionsFeatures • Maximum Entropy • Random Fields / CRF"
    },
    {
      "slide": 2,
      "text": ""
    },
    {
      "slide": 3,
      "text": "Part 1 — Understanding Word Structure\nhappy\nunhappy\nhappiness\nunhappiness\nComputer see four completely different words, or can it understand that they are connected?\nAt the computer level, there are different sequences of characters. But for NLP, we want to discover the relationship between them.\nFor example: unhappiness → un + happy + ness\nNow we can see that one word contains several pieces, and each piece gives us information.\nThis leads us to our first concept: Morphology is the study of the internal structure and formation of words."
    },
    {
      "slide": 4,
      "text": "Morphology — Looking Inside the Word\nInstead of treating: unhappiness as one single unit, NLP can analyze its structure: un + happy + ness\nThe important idea is: A word may contain more information than just the complete word itself.\nAnother example: played → play + ed\nThe computer can understand:\nplay = main meaning\ned = grammatical information associated with past tense"
    },
    {
      "slide": 5,
      "text": "Why Does NLP Need Morphology?\nImagine we are building a search engine.\nA document contains: “Sara is playing football.”\nThe user searches: “play football”\nIf our system only compares exact words: play ≠ playing  It may miss the document.\nBut if the NLP system recognizes: playing → play + ing it can connect the two forms.\nSo morphology can support tasks such as search, text analysis, machine translation, and other by exposing relationships b/w word forms.\nThis is the practical reason for studying morphology: different-looking words can carry related information."
    },
    {
      "slide": 6,
      "text": "2. Morphemes — What Are the Pieces?\nIf we can break a word into pieces,  we call those pieces as morphemes.\nA morpheme is a small unit of a word that carries meaning or grammatical information.\nExample: \nbooks → book + s book = main meaning s = plural information\nplayed → play + ed play = main meaning  ed = grammatical information\nSo: from the WORD → MORPHEMES"
    },
    {
      "slide": 7,
      "text": "3. Root, Prefix and Suffix\nNow we can give names to the different positions. Unhelpful/ Break it: un + help + ful\nThe root carries the central meaning: help\nA prefix comes before the root: un + help\nA suffix comes after the root: help + ful\nSo visually: PREFIX + ROOT + SUFFIX (un + help + ful)\nYour Module 2 uses this distinction to introduce how word structure can be analyzed systematically."
    },
    {
      "slide": 8,
      "text": "Small Vibe Coding Activity\nGive Antigravity or another coding assistant this prompt:\nCreate a very simple Python Streamlit app called \"Word X-Ray\". The user enters an English word. For a small predefined list of prefixes and suffixes, show the detected prefix, possible root, and suffix. Show the original word and its parts visually"
    },
    {
      "slide": 9,
      "text": ""
    },
    {
      "slide": 10,
      "text": "Part 2 — Understanding Word Forms\nThe main question for this section is:\nWhy can one basic word appear in many different forms, and how should an NLP system understand those relationships?\nThis part covers Inflection, Derivation, Morphological Diversity, \nand Morphological Paradigms. \nplay → plays → played → playing (grammatical form of a word)\nteach → teacher (we create a new related word.)\nAre all these changes doing the same thing?"
    },
    {
      "slide": 11,
      "text": "Inflection — Same Basic Word, Different Form\nLook at: play → played The basic word is still play. We mainly added grammatical information.\nbook → books book = one/ books = more than one\nThis is Inflection. Inflection changes the grammatical form of a word without creating a new lexical item.\nWhere Do We Use It in NLP?\nImagine a search engine has: “The student played football.”\nThe user searches: “play football”\nThe NLP system benefits from knowing: played → play"
    },
    {
      "slide": 12,
      "text": "Derivation — Creating a New Related Word\nteach → teacher This is different. teach = Verb/ teacher = Noun\nhappy → happiness happy = Adjective/ happiness = Noun\nThis is Derivation. Derivation creates a new related word and may change its grammatical category. Show one word at a time:\nPlayed/INFLECTION\nTeacher/ DERIVATION\nBooks/ INFLECTION\nHappiness/ DERIVATION\nWhy should an NLP system care about the difference?\nBecause: play → played and teach → teacher represent different kinds of relationships between words."
    },
    {
      "slide": 13,
      "text": "Morphological Diversity — Break Our English NLP System\nSo, We built an NLP system that understands English word forms.”\nBut: “Can I use exactly the same rules for every language?” This is where the system starts to fail.\nDifferent languages can express grammatical information differently This is Morphological Diversity."
    },
    {
      "slide": 14,
      "text": "Morphological Paradigm — Let the Computer Discover the Family\nPlay: plays/ played/ playing\nThese related forms can be organized as a Morphological Paradigm.\nA morphological paradigm is an organized set of related forms of a word. \nInstead of seeing: play/played/playing as three unrelated strings (store every word separately), the computer can learn their systematic relationship (discover the pattern)."
    },
    {
      "slide": 15,
      "text": "Mini AI Challenge — Can AI Predict the Missing Form?\ntalk → talks → talked → ? Answer: talking\nwork → works → ? → working Answer: worked\ngo → goes → ? → going\nNow the simple pattern breaks: went\nCan we solve every word using one simple rule? No.\nLanguage contains regular patterns and irregular forms.\nThis gives you an excellent transition into Part 3:\n“We now understand that words have patterns. The next problem is: how can we make the COMPUTER process these patterns?”\nThat takes us to: Finite-State Machines → Finite-State Morphology → Analysis/Generation → Automatic Morphology Learning."
    },
    {
      "slide": 16,
      "text": "Vibe Coding Task\nGive Antigravity this prompt:\nModify my existing Word X-Ray Streamlit application. Do not create a new project. Keep all existing Part 1 features. Add simple detection of inflection and derivation, show the root and suffix, classify the word as Inflection or Derivation when possible, and add a Word Family section that generates simple forms such as play, plays, played, and playing. Keep the Python code simple and explain the new code separately from the existing code.\nTest your upgraded system with:\nPlayed/books/teacher/happiness/playing/go"
    },
    {
      "slide": 17,
      "text": ""
    },
    {
      "slide": 18,
      "text": "Part 3 — Processing Word Forms by Computer\nNow we move from understanding word forms TO How can we make the computer actually analyze and generate them?\nPart 3 covers Finite-State Machine (FSM), Finite-State Morphology, Analysis & Generation, and Automatic Morphology Learning. \nStart by Making Our Word X-Ray App Fail\nFrom Parts 1 and 2, our application can already do something like:\nInput: played\nOutput: Root: play/Suffix: ed/Type: Inflection\nHow did our program know that ed can come after play? How can the computer represent which word-building paths are allowed?\nThis is where we introduce the Finite-State Machine."
    },
    {
      "slide": 19,
      "text": "Finite-State Machine — Give the Computer a Path\nImagine a small Word Machine. We start with: play The machine can follow different paths: play → FINAL/play → s → FINAL/play → ed → FINAL/play → ing → FINAL\nSo it can recognize: Play/plays/played/playing \nA Finite-State Machine (FSM) has a limited number of states and moves between them using allowed transitions.  FSM is like a map. The computer can only travel through allowed paths.  For example: START → play → ed → FINAL ✅\nBut an unsupported path such as:\nSTART → play → xyz  can be rejected by our simplified machine.\nWhere Do We Use It?\nFinite-state methods are useful when language patterns can be represented with clear rules, especially for morphological analysis and generation.\nSo instead of writing many disconnected if statements, we can represent word processing as states + transitions."
    },
    {
      "slide": 20,
      "text": ""
    },
    {
      "slide": 21,
      "text": "Finite-State Morphology — Use the Machine for Words\nNow connect FSM directly to NLP.\nIf the machine is specifically being used to analyze or generate word forms, we are moving into Finite-State Morphology.\nFor example: Root: play/ Possible transitions:+ s/+ ed/+ ing\nOutputs: plays/played/playing\nFSM = general computational idea\nFinite-State Morphology = using finite-state methods for morphological processing"
    },
    {
      "slide": 22,
      "text": ""
    },
    {
      "slide": 23,
      "text": "Human Word Machine\nINPUT: walk + ed\nAre we analyzing or generating?\nGeneration Output: walked\nINPUT: books/Output: book + s\nAnalysis\nplaying → play + ing\nteach + er → teacher\ncars → car + s\nhappy + ness → happiness"
    },
    {
      "slide": 24,
      "text": "But There Is a Problem With Rules\nSuppose we manually create hundreds of rules.\nThen thousands.\nThen we want to support another language.\nDo we really want humans to manually write every possible word pattern?\nThis creates the reason for the next concept."
    },
    {
      "slide": 25,
      "text": "Automatic Morphology Learning — Let the Computer Find Patterns\nGive the computer data: play, played, playing/walk, walked, walking/talk, talked, talking/ work, worked, working/ What patterns could the computer discover from the data?\nIt may notice: Ed: appears repeatedly. And: ing appears repeatedly.\nThis is the basic idea behind Automatic Morphology Learning:\nInstead of manually giving every morphological rule, the computer discovers useful word patterns from language data\nRule-Based: Human: “Here are the rules.”/ Computer: “I will apply them.” \nVersus  Automatic Learning\nHuman: “Here are many examples.”/ Computer: “I will discover patterns.”"
    },
    {
      "slide": 26,
      "text": "Vibe Coding Task — Modify Version 2\nGive Antigravity:\nModify my existing Word X-Ray Streamlit application. Do not create a new project and do not remove the previous features. Add two new modes: Morphological Analysis and Morphological Generation. In Analysis mode, the user enters a word such as played and the application shows its possible root and suffix. In Generation mode, the user enters a root such as play and selects a simple form such as base, third-person singular, past, or ing-form, and the application generates the word. Keep the rules simple and clearly explain that this is an educational rule-based system.\nThen test: Analysis/ played → play + ed/playing → play + ing/ books → book + s\nGeneration: play + past → played/ play + ing → playing/ book + plural → books"
    },
    {
      "slide": 27,
      "text": "Final Challenge — Can We Make Version 3 Fail?\nEnter: went / Ask the application to find: go\nA simple suffix-based system probably cannot.\nOr ask it to generate: go + past/ It may produce: goed ❌\nWhy did our machine fail?\nBecause simple finite-state/rule-based patterns need appropriate rules and lexical information for irregular cases; manually handling every language pattern can become difficult.\nCould we let the computer learn more patterns from data instead?\nNow Automatic Morphology Learning has a real purpose."
    },
    {
      "slide": 28,
      "text": ""
    },
    {
      "slide": 29,
      "text": "Part 4 — Finding Information in Sentences\nUntil now, we mainly worked with individual words.\nPart 1: What is inside the word?Part 2: Why does the word change form?Part 3: How can the computer process those forms?\nIs understanding individual words enough to understand useful information in a sentence?\nConsider: Dr. Sara joined Microsoft in Dubai.\nWe now want the computer to discover groups of words and important real-world information.\nThat brings us to Shallow Parsing + Named Entity Recognition (NER)."
    },
    {
      "slide": 30,
      "text": "Shallow Parsing — Find Groups of Words\nThe smart student completed the difficult project.\nThe computer already knows the individual words.\nBut we want something more useful: [The smart student] [completed] [the difficult project]  We have grouped related words together.\nThis is Shallow Parsing, also called Chunking.\nShallow Parsing identifies useful groups of words in a sentence without performing a complete deep grammatical analysis\nFor example:\n[The smart student] → Noun Phrase\n[completed] → Verb Phrase\n[the difficult project] → Noun Phrase"
    },
    {
      "slide": 31,
      "text": "But Which Words Are Important?\nDr. Sara joined Microsoft in Dubai.\nChunking can help us group words.\nBut now ask: Can the computer tell me WHO, WHICH ORGANIZATION and WHERE?\nExpected:\nSara → Person\nMicrosoft → Organization\nDubai → Location\nThis is a different NLP task. Instead of returning only ordinary text, the NLP system has converted part of the sentence into structured information.\nNamed Entity Recognition (NER) identifies and classifies named entities in text. "
    },
    {
      "slide": 32,
      "text": "Where Is NER Useful?\nImagine we have 10,000 news articles.\nWe want to answer:\nWhich companies are mentioned?\nWhich people are mentioned?\nWhich locations are mentioned?\nReading every document manually would be inefficient.\nNER can automatically extract those entities.\nThat makes it useful for tasks such as information extraction, search, question answering, and organizing information from large text collections"
    },
    {
      "slide": 33,
      "text": "Make NER Fail \nShow only: Jordan/ Ask: Person or Location?\nI travelled to Jordan/ Jordan → LOCATION\nThen:\nJordan submitted the assignment./ Jordan → PERSON\nThe word is exactly the same. What changed? The surrounding context.\nThis creates the perfect transition to Part 5 later:\nHow can the computer use features, context and probabilities to decide the correct label?"
    },
    {
      "slide": 34,
      "text": "Shallow Parsing vs NER"
    },
    {
      "slide": 35,
      "text": "Upgrade the SAME Word X-Ray App — Version 4\nGive Antigravity:\nModify my existing Word X-Ray Streamlit application. Do not create a new project and do not remove any previous features. Add a new section called \"Sentence Analyzer\". Allow the user to enter an English sentence. Add a simple shallow parsing/chunking demonstration to show useful groups of words. Also add Named Entity Recognition to identify entities such as Person, Organization, Location and Date. Display the results clearly and keep the code simple for undergraduate NLP students. Explain which part performs chunking and which part performs NER.\nThen test:\nSara joined Microsoft in Dubai on Monday.\nApple opened a new office.\nI ate an apple."
    },
    {
      "slide": 36,
      "text": ""
    },
    {
      "slide": 37,
      "text": "Part 5 — Making Better NLP Decisions\nIn Part 4, we could identify:\nSara → PersonMicrosoft → OrganizationDubai → Location\nBut we found a problem:\nJordan\nIs it a Person or a Location?\nSo Part 5 asks:\nHow can the computer make the correct decision when the answer is not obvious?\nWe introduce three connected ideas:\nFeatures → Maximum Entropy Model → Random Fields / CRF. "
    },
    {
      "slide": 38,
      "text": "Why Are Simple Rules Not Enough?\nSuppose we create this rule:\nIf a word starts with a capital letter → Person\nTest: Ahmed arrived. Ahmed → Person ✅\nBut: Dubai is beautiful. Dubai → Person ❌\nAnd:Microsoft released a product.\nMicrosoft → Person ❌ So one rule is not enough.\nThe computer needs more evidence before making its decision.\nThis evidence is represented using features."
    },
    {
      "slide": 39,
      "text": "Features — Give the Computer Clues\t\nSara travelled to Dubai./ We want to classify: Dubai\nInstead of looking only at Dubai, we collect clues.\nFeature 1: Current word = Dubai\nFeature 2: Previous word = to\nFeature 3: Starts with capital letter = Yes\nFeature 4: Nearby word = travelled\nThese are features.\nA feature is useful information from the input that helps a model make a decision."
    },
    {
      "slide": 40,
      "text": "Example\nAhmed works at Microsoft./ Target word: Microsoft\nWhat clues would you use to decide its entity type?\nPossible clues:\nCurrent word = MicrosoftPrevious word = atCapitalized = YesContext contains works at\nSo Does one clue guarantee the answer? No.\nWe need to combine evidence. That takes us to Maximum Entropy."
    },
    {
      "slide": 41,
      "text": "Maximum Entropy — Turn Evidence Into Probabilities\nSuppose our model analyzes:\nShe lives in Dubai. After using its features, it produces: Person = 0.05\nOrganization = 0.05/ Location = 0.90\nWhich one should the computer select? Argmax = Location\nA Maximum Entropy model combines features and calculates probabilities for possible labels.\nInput: Dubai + its features  Maximum Entropy Model Person = 0.05/ Organization = 0.05/ Location = 0.90\nArgmax: LOCATION"
    },
    {
      "slide": 42,
      "text": "But There Is Still a Problem\nAhmed works at New York University.\nSuppose we classify each word independently:\nNew → ?\nYork → ?\nUniversity → ?\nThis can be difficult.\nThese words belong to a sequence.\nShould we really make every label decision completely independently? Not always.\nInformation from neighboring words and labels can help.\nThis gives us the final concept."
    },
    {
      "slide": 43,
      "text": "Random Fields / CRF — Look at the Sequence\nA Random Field models relationships among variables.\nFor NLP sequence labeling, Conditional Random Fields (CRF) are especially useful.\nInstead of treating: New/York/ University as completely unrelated decisions, the model can consider the sequence.  New York University → ORGANIZATION\nAhmed works at ABC Bank in Dubai.\nThe labeling sequence might be:\nAhmed → PERSON/works → O/at → O/ABC → ORGANIZATION/ Bank → ORGANIZATION/ in → O/ Dubai → LOCATION\nThe key idea:\nCRF considers the sequence and relationships between neighboring labels, not only one isolated decision."
    },
    {
      "slide": 44,
      "text": "Maximum Entropy vs CRF"
    },
    {
      "slide": 45,
      "text": "Vibe Coding Task — Modify Version 4\nModify my existing Word X-Ray Streamlit application. Do not create a new project and do not remove previous features. Extend the Sentence Analyzer so that it visually explains an NER decision. For a selected entity, show simple features such as the current word, previous word, capitalization and nearby words. Then show illustrative probabilities for Person, Organization and Location and highlight the highest probability as the predicted label. Clearly mark illustrative probabilities as an educational simulation, not probabilities from the real NER model. Also add a simple sequence view showing every word and its NER label."
    },
    {
      "slide": 46,
      "text": ""
    }
  ]
};
