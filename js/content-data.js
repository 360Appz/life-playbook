// ===== THE BRUTAL PLAYBOOK INTERACTIVE ADVENTURE =====
// All content data organized for gamification

const contentData = {
  playbooks: {
    original: {
      title: "The Brutal Playbook",
      subtitle: "A No-Bullshit Guide to Unfucking Your Life",
      color: "#FF6B35",
      phases: [
        {
          id: "phase0",
          title: "PHASE 0: THE AUDIT",
          subtitle: "The Part Everyone Skips Because It's Uncomfortable",
          sections: [
            {
              heading: "🔥 FOUNDATIONAL TRUTH",
              content: "Most self-help is designed to make you feel good, not get better. This playbook is designed to make you uncomfortable, then effective.\n\nThe brutal facts:\n• You are probably lying to yourself about something important right now\n• Your comfort zone is a cage you've decorated\n• Motivation is garbage. Systems are everything.\n• You will resist the exact things that would help you most\n• Reading this won't change anything. Doing will."
            },
            {
              heading: "THE 7-DAY TRUTH TRACKING",
              content: "Week 1: Track reality, not aspirations\n\nCreate a spreadsheet. Track daily for 7 days:\n\nTIME:\n• What you actually did hour-by-hour (not what you planned)\n• Screen time (actual number, not estimate)\n• Sleep (when you got in bed, when you actually slept, when you woke)\n\nMONEY:\n• Every dollar spent\n• Every dollar earned\n• Current debt total\n• Current savings total\n\nBODY:\n• What you ate (everything, including bites/sips)\n• Movement (minutes of actual activity)\n• Energy level (1-10, three times daily)\n• Substances (caffeine, alcohol, drugs - amounts)\n\nSOCIAL:\n• Quality interactions (meaningful conversations >10 min)\n• Shallow interactions (scrolling, small talk)\n• Alone time (hours)\n\nEMOTIONAL:\n• Mood (1-10, three times daily)\n• Anxiety/stress triggers (what happened right before)\n• Moments of genuine satisfaction (what were you doing)\n\nOUTPUT:\n• Creative work done (hours)\n• Deep work done (hours)\n• Shallow work done (hours)\n• Learning (what, how long)"
            },
            {
              heading: "THE BRUTAL QUESTIONS",
              content: "After 7 days, answer these:\n\n1. Where is the gap between who you say you are and what you actually do?\n- You say you're 'healthy' but ate fast food 5 times?\n- You say 'family is important' but spent 2 hours with them vs. 30 hours on screens?\n\n2. What are you avoiding?\n- That project you 'don't have time for' but watched 10 hours of Netflix?\n- That conversation you 'need to have' but keep postponing?\n\n3. What are your actual energy patterns?\n- When are you sharpest? (Probably not when you schedule 'important work')\n- When do you crash? (Probably predictable)\n\n4. What's your real financial situation?\n- Can you survive 3 months without income? (If no, this is Priority 1)\n- Where does money leak? (Subscriptions? Convenience? Status purchases?)\n\n5. What actually makes you feel good vs. what you use to numb?\n- After what activities do you feel energized vs. depleted?"
            },
            {
              heading: "THE REALITY SCORE",
              content: "Rate yourself 1-10 (be honest, no one's watching):\n\n• Physical Health: ___\n• Mental Health: ___\n• Financial Stability: ___\n• Relationship Quality: ___\n• Career Satisfaction: ___\n• Personal Growth: ___\n• Life Meaning/Purpose: ___\n\nBrtal truth: Any score below 5 is an emergency. Below 7 needs immediate attention."
            }
          ]
        },
        {
          id: "phase1",
          title: "PHASE 1: TRIAGE",
          subtitle: "Fix the Bleeding First",
          sections: [
            {
              heading: "THE HIERARCHY OF URGENCY",
              content: "Handle in this order. Non-negotiable.\n\nTIER 1: SURVIVAL (If any are broken, stop everything else)"
            },
            {
              heading: "1. MONEY CRISIS",
              content: "Can't make rent/mortgage this month → Emergency\nCredit card debt with high interest → Crisis\nNo emergency fund → Serious problem\n\nBrtal Fix:\n• List all debts, interest rates, minimum payments\n• Cut every non-essential expense (yes, ALL of them)\n• Take any ethical work that pays immediately\n• Research: debt avalanche vs. debt snowball\n• Time frame: 30 days to stabilize, 6-12 months to solve"
            },
            {
              heading: "2. HEALTH CRISIS",
              content: "Untreated medical condition → Emergency\nSuicidal ideation → Emergency (call 988 in US, local crisis line elsewhere)\nAddiction affecting function → Crisis\nSevere sleep deprivation (<5 hrs regularly) → Crisis\n\nBrtal Fix:\n• See a doctor. Today if emergency, this week if crisis.\n• Mental health: research therapist types\n• Sleep: research sleep hygiene protocols, implement ruthlessly\n• Time frame: Immediate intervention"
            },
            {
              heading: "3. SAFETY CRISIS",
              content: "Abusive relationship → Emergency\nUnsafe living situation → Emergency\nLegal trouble → Crisis\n\nBrtal Fix:\n• Document everything\n• Research resources (domestic violence hotlines, legal aid)\n• Make exit plan\n• Tell someone trustworthy\n• Time frame: As fast as safely possible"
            },
            {
              heading: "TIER 2: FOUNDATION - Sleep Protocol",
              content: "Month 1 Sleep Protocol:\n• Same bedtime every night (including weekends)\n• No screens 1 hour before bed\n• Room: dark, cool (65-68°F), quiet\n• Track: what time you're actually asleep, how you feel\n• Research: Matthew Walker's sleep research"
            },
            {
              heading: "TIER 2: FOUNDATION - Movement Protocol",
              content: "Month 1 Movement Protocol:\n• Start: 10-minute walk daily (non-negotiable)\n• Week 2: 20 minutes\n• Week 3: 30 minutes\n• Week 4: Add resistance (bodyweight exercises)\n• Track: did it or didn't (no excuses count)"
            },
            {
              heading: "TIER 2: FOUNDATION - Nutrition Protocol",
              content: "Month 2 Nutrition Protocol:\n• Don't start with restriction, start with addition\n• Add: one vegetable to every meal\n• Add: protein to breakfast\n• Add: water (half your body weight in ounces)\n• Track: energy levels, digestion, mood\n• Research: actual nutrition science, not diet trends (examine sources - who funded the study?)"
            },
            {
              heading: "TIER 2: FOUNDATION - Basic Mental Health",
              content: "Current state check:\n• Constant anxiety → Need intervention\n• Depression affecting function → Need intervention\n• No emotional regulation → Need skills\n• Trauma responses → Need processing\n\nFind help (Week 1):\n• Research therapist types for your specific issues\n• Check insurance coverage or sliding scale options\n• Psychology Today directory, local mental health centers\n• Book appointment (stop 'thinking about it')\n\nDaily practices (Start immediately):\n• Journaling: 10 min daily, stream of consciousness\n• Meditation: Start with 5 min (research: secular mindfulness studies)\n• Mood tracking: Note what affects it\n• Research: CBT workbooks, DBT skills, what evidence supports for your issues"
            },
            {
              heading: "TIER 2: FOUNDATION - Basic Financial Stability",
              content: "Minimum viable:\n• 1 month expenses saved (eventually 3-6 months)\n• No high-interest debt\n• Income exceeds expenses\n• Basic budget tracking\n\nMonth 1: Reality\n• Track every cent for 30 days\n• Calculate: necessary expenses vs. optional\n• Identify: where money goes unconsciously\n\nMonth 2: Plug holes\n• Cancel subscriptions you don't use weekly\n• Negotiate bills (call and ask for discounts)\n• Meal prep instead of eating out\n• Research: actual financial literacy (not get-rich-quick schemes)\n\nMonth 3: Build buffer\n• Automate: savings first, not leftovers\n• Side income: what skills can you monetize immediately?\n• Research: index funds, boring investing (not crypto gambling)"
            },
            {
              heading: "TIER 3: OPTIMIZATION",
              content: "Only after Tiers 1 & 2 are solid:\n• Relationships\n• Career advancement\n• Creative pursuits\n• Legacy/meaning\n\nBrtal truth: If you're working on Tier 3 while Tier 1 or 2 is broken, you're procrastinating with 'self-improvement.'"
            }
          ]
        },
        {
          id: "phase2",
          title: "PHASE 2: SYSTEMS OVER GOALS",
          subtitle: "How to Actually Change",
          sections: [
            {
              heading: "WHY GOALS FAIL",
              content: "Goals are outcome-focused. You can't control outcomes. You can only control systems.\n\nExample:\n❌ Goal: 'Lose 30 pounds'\n✅ System: 'Strength train 3x/week, eat protein at every meal'"
            },
            {
              heading: "THE SYSTEM-BUILDING PROTOCOL",
              content: "Step 1: Pick ONE area from your Tier 2 or 3\n(Seriously, just one. Your brain can't handle more.)\n\nStep 2: Define the minimum viable action\nNot the inspiring version. The 'even on my worst day' version.\n\nStep 3: Anchor it to existing behavior\n'After I [existing habit], I will [new tiny habit]'\n\nStep 4: Track ruthlessly\nSimple: ✓ or ✗ each day. Nothing else.\n\nStep 5: The 30-day rule\nDo not add another habit until this one is automatic (30 consecutive days)."
            },
            {
              heading: "THE BRUTAL TRUTH ABOUT WILLPOWER",
              content: "Research is clear: Willpower is finite. Structure is infinite.\n\nInstead of: 'I need more discipline'\nAsk: 'How can I make this automatic?'\n\n• Want to eat healthier? Don't keep junk food in the house\n• Want to be more productive? Phone in different room during work\n• Want better relationships? Weekly calendar reminder for friend check-ins"
            }
          ]
        },
        {
          id: "phase3",
          title: "PHASE 3: THE HARD CONVERSATIONS",
          subtitle: "What You're Avoiding",
          sections: [
            {
              heading: "THE AVOIDANCE INVENTORY",
              content: "List everything you know you should do but haven't:\n\nCAREER:\n• Ask for raise/promotion\n• Leave toxic job\n• Start business/project\n• Learn new skill\n• Network/reach out\n\nRELATIONSHIPS:\n• End unhealthy relationship\n• Set boundaries with family\n• Have 'the talk' with partner\n• Apologize for something\n• Ask for what you need\n\nHEALTH:\n• See doctor about [thing]\n• Address addiction\n• Get therapy\n• Join gym/program\n• Sleep schedule\n\nMONEY:\n• Check bank account\n• Face debt\n• Ask for money owed\n• Negotiate rates\n• File taxes\n\nPERSONAL:\n• Grieve loss\n• Process trauma\n• Admit mistake\n• Change belief\n• Forgive (self or other)"
            },
            {
              heading: "THE PROTOCOL FOR HARD THINGS",
              content: "Step 1: Name the fear\nWhat are you actually afraid of?\n• Rejection?\n• Conflict?\n• Failure?\n• Success? (Yes, this is real)\n• Finding out you were wrong?\n• Change?\n\nStep 2: Reality-test the fear\n• 'What's the worst that actually happens?'\n• 'Can I survive that?'\n• 'What's the cost of NOT doing it?'\n• 'What's the best that could happen?'\n\nStep 3: Make it smaller\nCan't quit your job? Update resume.\nCan't have the full conversation? Ask one question.\nCan't start the project? Do 10 minutes.\n\nStep 4: Set a deadline\n'I will [specific action] by [specific date].'\nNot 'someday.' Not 'when I'm ready.'\n\nStep 5: Create accountability\nTell someone. Bet money. Make it public.\nResearch shows: external accountability increases follow-through by 65-95% (check: Stickk.com studies, Gollwitzer implementation intention research)."
            },
            {
              heading: "THE TOUGH LOVE SECTION",
              content: "You already know what you need to do.\nYou're not confused. You're scared.\nThat's human. But it's not an excuse.\n\nThe things you're avoiding are probably:\n• The exact things that would help most\n• Getting worse the longer you wait\n• Not as bad as the story you're telling yourself\n\nExamples from real life:\n\nPerson avoiding doctor:\n• Fear: 'What if it's cancer?'\n• Reality: Found early-stage issue, fully treatable\n• Cost of avoiding: Would've been untreatable in 6 months\n\nPerson avoiding breakup:\n• Fear: 'I'll be alone forever'\n• Reality: 3 months of grief, then relief, then better relationship year later\n• Cost of avoiding: 2 more years of misery\n\nPerson avoiding career change:\n• Fear: 'I'll fail and be broke'\n• Reality: Side hustle grew, quit job, doubled income in year 2\n• Cost of avoiding: Would still be miserable in dead-end job\n\nThe pattern: The anticipation is worse than the reality."
            }
          ]
        },
        {
          id: "phase4",
          title: "PHASE 4: THE RESEARCH PROTOCOLS",
          subtitle: "How to Actually Find Truth",
          sections: [
            {
              heading: "INFORMATION LITERACY IN THE BULLSHIT AGE",
              content: "Most advice is either:\n• Someone's anecdote (sample size: 1)\n• Marketing disguised as help\n• Ideology disguised as fact\n• Outdated conventional wisdom\n\nFor any claim, ask:\n1. 'Who benefits if I believe this?'\n2. 'What's the actual evidence?'\n3. 'What do credible sources disagree on?'\n4. 'What's the base rate?'\n5. 'What am I not being told?'"
            },
            {
              heading: "WHERE TO ACTUALLY RESEARCH",
              content: "HEALTH/PSYCHOLOGY:\n• PubMed (actual studies)\n• Cochrane Reviews (meta-analyses)\n• NIH, Mayo Clinic\n\nFINANCE:\n• Bogleheads (evidence-based investing)\n• FIRE communities (real numbers)\n• Government resources (FDIC, SEC)\n\nSKILLS/LEARNING:\n• Academic papers on pedagogy\n• Communities of practitioners\n• Open courseware (MIT, Stanford)\n\nThe Brutal Filter:\n• If it sounds too good to be true → it is\n• If it promises easy → it's lying\n• If it attacks all alternatives → it's ideology\n• If it can't explain mechanisms → it's magic thinking"
            }
          ]
        },
        {
          id: "phase5",
          title: "PHASE 5: THE EXPERIMENTS",
          subtitle: "Scientific Method for Your Life",
          sections: [
            {
              heading: "TREAT YOUR LIFE LIKE A LAB",
              content: "The Protocol:\n\n1. Form a hypothesis\n'If I [specific change], then [measurable outcome] will happen in [timeframe].'\nExamples:\n• 'If I sleep 8 hours for 30 days, my afternoon energy will increase (measured 1-10 scale)'\n• 'If I send 5 networking emails per week for 8 weeks, I'll get 2 meaningful conversations'\n• 'If I eliminate sugar for 14 days, my mood variability will decrease (tracked 3x daily)'\n\n2. Control variables\nChange ONE thing at a time. If you change sleep, diet, exercise, and meditation simultaneously, you'll never know what worked.\n\n3. Measure objectively\nNot 'I feel better' (memory is unreliable). Use:\n• Numbers (time, money, weight, reps, words written)\n• Scales (1-10 ratings, logged 3x daily minimum)\n• Binary outcomes (did it/didn't do it)\n• Photos/recordings (for comparison)\n\n4. Set a duration\n• Minimum 30 days for habits\n• Minimum 90 days for meaningful change\n• No 'I tried it for a week' conclusions\n\n5. Analyze honestly\n• Better? → Keep and build on it\n• Worse? → Stop and analyze why\n• No change? → Either need more time or wrong variable\n\n6. Iterate\n'Okay, that didn't work. What's the next test?' Not 'I failed,' but 'That experiment gave me data.'"
            },
            {
              heading: "COMMON EXPERIMENTS WORTH RUNNING",
              content: "PHYSICAL:\n• Elimination diet (30 days, remove common triggers)\n• Sleep schedule consistency (30 days, same time)\n• Morning cold exposure (60 days, cold showers)\n• Strength training protocol (90 days, track lifts)\n\nMENTAL:\n• Meditation practice (60 days, 10 min daily)\n• Therapy modality (12 weeks minimum)\n• Journaling practice (30 days, 10 min daily)\n• Digital detox weekends (8 weeks)\n\nPRODUCTIVITY:\n• Time blocking (30 days)\n• Deep work sessions (pomodoro, flowtime, 90-min blocks — test each for 2 weeks)\n• Morning routine (30 days, same sequence)\n• Email batching (30 days, 2x daily only)\n\nSOCIAL:\n• Reaching out first (30 days, daily contact initiated)\n• Saying no to obligations (30 days, default no, only yes if hell yes)\n• Vulnerability practice (60 days, share one real thing weekly)\n\nFINANCIAL:\n• Track every expense (30 days)\n• No discretionary spending (30 days)\n• Meal prep all meals (30 days)\n• Automate savings first (90 days)"
            },
            {
              heading: "THE FAILURE ANALYSIS",
              content: "When experiments 'fail,' ask:\n\n1. Did I actually do it consistently?\n60% compliance ≠ 'tried it'. Check your tracking data.\n\n2. Was the timeframe sufficient?\nMost things need 6-12 weeks minimum. Habit formation: 66 days average (research: Lally et al.)\n\n3. Was I measuring the right thing?\nMaybe the outcome changed but you weren't looking there.\n\n4. Were there confounding variables?\nMajor life stress? Illness? Other changes?\n\n5. Was the hypothesis flawed?\nMaybe the premise was wrong. That's not failure, that's learning."
            }
          ]
        },
        {
          id: "phase6",
          title: "PHASE 6: THE INNER GAME",
          subtitle: "Mindset Without the Woo",
          sections: [
            {
              heading: "1. COGNITIVE DISTORTIONS (KNOW YOUR BRAIN'S LIES)",
              content: "Research: Aaron Beck, David Burns (Cognitive Behavioral Therapy)\nYour brain lies to you. Learn the patterns:\n\nAll-or-nothing thinking:\n'I ate one cookie, day is ruined, might as well eat the whole box'\nReality: One choice doesn't negate all others\n\nOvergeneralization:\n'I failed once, I always fail'\nReality: Sample size of 1 proves nothing\n\nMental filter:\nFocus on negative, ignore positive\nReality: Confirmation bias in action\n\nCatastrophizing:\n'This will be a disaster'\nReality: Ask 'what's the actual probability?'\n\nPersonalization:\n'Everything is my fault' or 'Nothing is my fault'\nReality: Most things are complex, multi-causal\n\nThe Fix: When you notice these, literally interrupt yourself. 'Wait, is that actually true or is that a cognitive distortion?'"
            },
            {
              heading: "2. LOCUS OF CONTROL",
              content: "Research: Julian Rotter, later expanded in Stoicism\n\nCan control:\n• Your actions\n• Your responses\n• Your effort\n• Your interpretation\n• Your focus\n\nCannot control:\n• Other people\n• Outcomes (only influence)\n• The past\n• External events\n• Natural consequences\n\nThe brutal truth: You spend 80% of mental energy on things you can't control.\n\nThe fix: When anxious/stressed, ask: 'Can I control this?'\n• Yes → Do something\n• No → Let it go (or prepare for possibilities)"
            },
            {
              heading: "3. IDENTITY-BASED CHANGE",
              content: "Research: James Clear popularized, but concept from behavioral psychology\n\nLevel 1: Outcome-based\n'I want to lose weight' (focused on result)\n\nLevel 2: Process-based\n'I will go to gym 3x/week' (focused on action)\n\nLevel 3: Identity-based\n'I am a healthy person' (focused on being)\n\nThe research shows: Identity-level change is most sustainable.\n\nHow to use it:\nInstead of: 'I'm trying to write'\nSay: 'I'm a writer' (then act accordingly)\nInstead of: 'I should save money'\nSay: 'I'm financially responsible' (then make choices that match)\n\nWarning: Don't claim identities you're not willing to embody. The actions must match the label."
            },
            {
              heading: "4. METACOGNITION (THINKING ABOUT THINKING)",
              content: "Research: John Flavell, cognitive psychology\n\nThe skill: Notice your thoughts without being them.\n\nPractice:\n'I'm having the thought that I can't do this'\nNot: 'I can't do this'\n\nThe difference: Creates space between stimulus and response.\n\nDaily practice:\n• Set timer for 3 min\n• Notice thoughts like clouds passing\n• Don't engage, just observe\nThis is meditation stripped of mysticism."
            },
            {
              heading: "5. GROWTH MINDSET (THE NUANCE THEY DON'T TELL YOU)",
              content: "Research: Carol Dweck\n\nNot: 'I can do anything if I try hard enough!' (Toxic positivity)\nActually: 'I can improve most skills with deliberate practice, but some things have natural limits and that's okay.'\n\nFixed mindset triggers to watch:\n• 'I'm not a math person'\n• 'I'm just bad at relationships'\n• 'I'm not creative'\n\nGrowth mindset reframe:\n• 'I haven't learned this yet'\n• 'I'm developing this skill'\n• 'I'm figuring this out'\n\nBut also be honest:\n• Some things are harder for you than others\n• Natural aptitudes exist\n• Play to strengths while developing weaknesses"
            },
            {
              heading: "6. SELF-COMPASSION (NOT SELF-INDULGENCE)",
              content: "Research: Kristin Neff\n\nNot: 'I failed so I'm terrible' (self-criticism)\nNot: 'I failed but it's fine!' (bypassing)\nActually: 'I failed, this is hard, this is part of learning, what's next?'\n\nThe three components:\n1. Self-kindness (treat yourself like a friend)\n2. Common humanity (everyone struggles)\n3. Mindfulness (acknowledge pain without amplifying)\n\nBrutal truth: Self-compassion leads to higher standards and better performance than self-criticism (check the research — it's counterintuitive but solid)."
            }
          ]
        },
        {
          id: "phase7",
          title: "PHASE 7: THE RELATIONSHIP PLAYBOOK",
          subtitle: "Because Humans Need Humans",
          sections: [
            {
              heading: "THE BRUTAL TRUTHS ABOUT RELATIONSHIPS",
              content: "Research base: Gottman Institute (40+ years studying couples), attachment theory (Bowlby, Ainsworth), social psychology\n\nTruth 1: You can't have healthy relationships if you're not healthy\nFix yourself first isn't selfish, it's necessary.\n\nTruth 2: Most relationship problems are communication problems\nNot compatibility. Not love. Communication.\n\nTruth 3: Your childhood patterns run your adult relationships\nUntil you examine them.\n\nTruth 4: Relationships require deliberate effort\nThe 'it should just work' myth kills more relationships than anything.\n\nTruth 5: You can't change people\nYou can only change how you respond to them."
            },
            {
              heading: "THE RELATIONSHIP AUDIT",
              content: "For each significant relationship in your life, rate 1-10:\n\nQuality indicators:\n• Trust (can be vulnerable)\n• Respect (both directions)\n• Support (during hard times)\n• Growth (do you become better?)\n• Joy (actual enjoyment of time together)\n• Reciprocity (balanced give/take)\n• Safety (emotional and physical)\n\nIf any relationship scores below 5 on multiple factors → Problem\n\nAction items:\n• Above 7 → Nurture and appreciate\n• 4-7 → Needs work, decide if worth it\n• Below 4 → Exit or radical change needed"
            },
            {
              heading: "THE GOTTMAN METHOD BASICS",
              content: "The Four Horsemen (relationship killers):\n1. Criticism (attacking character, not behavior)\n2. Contempt (disrespect, mockery)\n3. Defensiveness (victim stance, deflection)\n4. Stonewalling (withdrawal, shutdown)\n\nThe Antidotes:\n\nInstead of criticism:\nGentle startup: 'I feel [emotion] about [situation]. I need [specific request]'\nNot: 'You never listen!'\nBut: 'I feel unheard when I'm interrupted. I need us to take turns talking.'\n\nInstead of contempt:\nBuild appreciation culture — 5:1 ratio positive to negative interactions (research-backed minimum)\nWeekly: share one thing you appreciate\n\nInstead of defensiveness:\nTake responsibility for your part — 'You're right, I did [thing]' even if they're also wrong\n\nInstead of stonewalling:\nCall timeout when flooded: 'I need 20 minutes, then I'll come back'\nActually come back\n\nThe Repair Attempts:\n• 'Can we start over?'\n• 'I'm sorry, that came out wrong'\n• 'I appreciate you'\n• 'This is important to me'\n• 'Help me understand'\n\nResearch shows: Successful couples don't fight less. They repair better."
            },
            {
              heading: "THE BOUNDARY PLAYBOOK",
              content: "What boundaries actually are: Limits you set on your own behavior. Not: attempts to control others.\n\nExamples:\nNot a boundary: 'You can't talk to me like that'\nActual boundary: 'I will leave the room if you yell at me'\n\nNot a boundary: 'You need to stop drinking'\nActual boundary: 'I won't be around you when you're drunk'\n\nNot a boundary: 'You should respect my time'\nActual boundary: 'I don't answer work calls after 7pm'\n\nThe Protocol:\n1. Identify the violation — What behavior is unacceptable? How does it affect you?\n2. State the boundary clearly — 'When [behavior], I will [consequence]' — No threats, just facts\n3. Follow through consistently — First time they test: you follow through. Every time after: you follow through. No exceptions = boundary established.\n4. Expect pushback — People who benefited from lack of boundaries will resist. That's their problem, not yours.\n\nThe Brutal Truth: Most people don't have boundary problems. They have enforcement problems."
            },
            {
              heading: "THE RELATIONSHIP TYPES",
              content: "ROMANTIC:\n• Weekly state of union (15 min check-in)\n• Daily emotional bid (respond to attempts at connection)\n• Monthly date (no kid/work talk)\n• Annual relationship audit (where are we, where going?)\n\nFRIENDSHIP:\n• Reach out first (don't wait for them)\n• Quality > quantity (2 close friends > 20 acquaintances)\n• Initiate deeper conversations (ask real questions)\n• Show up (when they need you, be there)\n\nFAMILY:\n• You didn't choose them, but you choose how much access they get\n• Boundaries are especially important here\n• Just because they're family doesn't mean unlimited tolerance\n• You can love someone and still limit contact\n\nPROFESSIONAL:\n• Clear role definitions\n• Emotional boundaries (friendly ≠ friends)\n• Don't expect personal relationship depth\n• Mentor/mentee relationships: value exchange should be clear"
            },
            {
              heading: "THE HARD RELATIONSHIP DECISIONS",
              content: "When to stay and work on it:\n• Both people want to improve\n• Problems are skill-based (communication, conflict resolution)\n• Core values align\n• Respect is present\n• Abuse is not present\n\nWhen to leave:\n• Abuse (physical, emotional, financial)\n• Active addiction without desire to change\n• Fundamental value incompatibility\n• Chronic contempt\n• You've become someone you don't recognize\n• Repeated boundary violations with no change\n\nThe sunk cost fallacy:\n'I've invested 5 years' is not a reason to stay.\nAsk: 'If I met this person today, would I choose them?'"
            }
          ]
        },
        {
          id: "phase8",
          title: "PHASE 8: THE CAREER PLAYBOOK",
          subtitle: "Making Money While Making Meaning",
          sections: [
            {
              heading: "THE BRUTAL CAREER TRUTHS",
              content: "Truth 1: 'Follow your passion' is privileged advice\nMost people need to 'follow opportunities to build skills that become valuable enough that you have options.'\n\nTruth 2: Your job is an exchange: your time/skills for money\nAnything beyond that (meaning, fulfillment, purpose) is a bonus, not a requirement.\n\nTruth 3: Career capital matters more than passion\nSkills that are rare and valuable give you leverage. Passion without skills gives you nothing.\n\nTruth 4: Most career advice is survivorship bias\n'I dropped out and started a billion dollar company!' (10 million others dropped out and are broke)"
            },
            {
              heading: "THE CAREER AUDIT",
              content: "FINANCIAL:\n• Salary/income: ___\n• Market rate for your role: ___ (research this)\n• Gap: ___\n• Years until next promotion: ___\n\nSKILL DEVELOPMENT:\n• What skills are you building?\n• Are they becoming more valuable or commoditized?\n• What's your 10-year skill trajectory?\n\nSATISFACTION:\n• Day-to-day enjoyment (1-10): ___\n• Mission alignment (1-10): ___\n• Manager quality (1-10): ___\n• Growth opportunity (1-10): ___\n• Work-life boundary (1-10): ___\n\nMARKET POSITION:\n• How replaceable are you (1-10, 10 = highly unique): ___\n• How many other companies would hire you tomorrow: ___\n• How much leverage do you have: ___\n\nIf overall average is below 6 → Time to strategize change"
            },
            {
              heading: "THE CAREER CAPITAL PROTOCOL",
              content: "Research: Cal Newport (So Good They Can't Ignore You)\n\nInstead of asking: 'What's my passion?'\nAsk: 'What skills can I develop that will be valuable and give me options?'\n\nThe three types of career capital:\n1. Rare and valuable skills\n• Technical: coding, data analysis, design, writing, sales\n• Soft: leadership, communication, negotiation, strategic thinking\n• Identify: what's in high demand but low supply?\n\n2. Strong network\nNot: collecting LinkedIn connections\nActually: people who would vouch for you, hire you, collaborate\nBuild: provide value first, ask for nothing\n\n3. Reputation/credibility\n• Portfolio of work\n• Testimonials/results\n• Public demonstrations of competence\n• Track record\n\nThe Investment Strategy:\nYears 0-3: Apprentice — Take jobs that teach you things. Money is secondary to learning. Find best teachers/mentors. Build foundational skills.\n\nYears 3-7: Builder — Leverage skills into better opportunities. Money becomes more important. Start creating, not just executing. Build reputation.\n\nYears 7+: Authority — You're now the expert. Options open up. Can make career capital demands. Teaching others, not just doing."
            },
            {
              heading: "THE JOB SEARCH PROTOCOL",
              content: "Step 1: Know your numbers\n• Minimum acceptable salary: ___ (living expenses + savings + debt payment + 20% buffer)\n• Target salary: ___ (market rate for your skills/experience)\n• Dream salary: ___ (top of market, requires negotiation)\n\nStep 2: The application strategy\nNot: Spray and pray (100 applications, 0 responses)\nActually: Targeted and networked\n• Identify 10-20 companies you'd actually want to work for\n• Research who works there (LinkedIn)\n• Find connections or connections of connections\n• Informational interviews (not asking for job, asking about company)\n• When job opens, you're a warm lead, not cold application\nSuccess rate: 10-20% vs. <1% for cold applications\n\nStep 3: The resume\nNot: Duties and responsibilities. Actually: Results and impact.\n❌ 'Managed social media accounts'\n✅ 'Increased engagement 147% in 6 months, leading to 23 new customers'\nFormula: [Action verb] + [specific result] + [timeframe] + [impact]\n\nStep 4: The interview\n• Research the company: recent news, competitors, challenges, customers/products\n• Prepare STAR stories: Situation, Task, Action, Result\n• Questions to ask them: 'What does success look like in this role in 6 months?' 'What are the biggest challenges the team is facing?' 'Why is this position open?'\n\nStep 5: The negotiation\n• Never give number first\n• Always negotiate (research shows: 90% of companies expect it)\n• Ask for 10-20% more than initial offer\n• Negotiate: salary, bonus, equity, PTO, remote work, start date, title\nScript: 'I'm excited about this opportunity. I was hoping for [number]. Can we make that work?'\nResearch shows: People who negotiate make $500k-$1M more over their careers."
            },
            {
              heading: "THE SIDE HUSTLE STRATEGY",
              content: "Why side hustle:\n• Income diversification\n• Skill building\n• Safety net\n• Option for escape\n\nHow to start:\nStep 1: Inventory — What skills do you have? What problems can you solve? What would people pay for?\n\nStep 2: Validate — Don't build it and hope they come. Find 3 people who would pay for it BEFORE you build.\n\nStep 3: Start small — Minimum viable offer. Manual before automated. 10 hours/week max initially.\n\nStep 4: Iterate based on data — What's working? What do customers actually want? Where's the revenue?\n\nCommon side hustles by skill:\n• Writing: Freelance content, ghostwriting, copywriting\n• Design: Freelance graphics, web design, brand identity\n• Tech: Web development, app development, automation\n• Teaching: Online courses, coaching, consulting\n• Creating: YouTube, newsletter, podcast (but monetization is hard)\n\nBrutal truth: Most side hustles fail or make <$500/month. But the ones that work can become full businesses."
            }
          ]
        },
        {
          id: "phase9",
          title: "PHASE 9: THE MONEY PLAYBOOK",
          subtitle: "The Boring Stuff That Actually Works",
          sections: [
            {
              heading: "THE FINANCIAL HIERARCHY",
              content: "Handle in this order:\n\nLevel 1: Stop Bleeding\n• Track every expense for 30 days\n• Identify unconscious spending\n• Cut expenses below income\n• Create basic budget\n\nLevel 2: Build Buffer\n• $1000 emergency fund (first)\n• Pay off high-interest debt (>7%)\n• 1 month expenses saved\n• 3-6 months expenses saved\n\nLevel 3: Grow\n• Max employer 401k match (free money)\n• Pay off remaining debt\n• Roth IRA contribution (if eligible)\n• 15% of income to retirement\n\nLevel 4: Build Wealth\n• Taxable investment accounts\n• Real estate (maybe)\n• Business investment\n• Alternative investments\n\nDon't skip levels."
            },
            {
              heading: "THE BUDGET THAT ACTUALLY WORKS",
              content: "Not: Tracking every penny in 47 categories\nActually: The 50/30/20 rule\n\n50% — Needs:\n• Rent/mortgage, utilities, food (groceries), transportation, insurance, minimum debt payments\n\n30% — Wants:\n• Dining out, entertainment, hobbies, non-essential shopping, subscriptions\n\n20% — Savings/Debt:\n• Emergency fund, retirement, extra debt payments, investments\n\nIf your needs are >50%:\n• Your housing is too expensive, OR\n• Your income is too low\nFix it."
            },
            {
              heading: "THE DEBT ELIMINATION PROTOCOL",
              content: "List all debts by balance, interest rate, and minimum payment.\n\nAvalanche (Mathematically optimal):\n• Pay minimums on all\n• Extra money to highest interest rate\n• When that's paid, attack next highest\n\nSnowball (Psychologically easier):\n• Pay minimums on all\n• Extra money to smallest balance\n• When that's paid, attack next smallest\n\nResearch shows: Snowball has higher completion rate despite being mathematically suboptimal (behavioral economics wins).\nPick one. Start today."
            },
            {
              heading: "THE INVESTMENT PLAYBOOK",
              content: "Index funds > Stock picking\nResearch is clear: 90% of active fund managers underperform index over 15 years.\n\nThe simple portfolio:\nYoung (20s-30s): 80-90% stock index funds + 10-20% bond index funds\nMid-career (40s-50s): 70-80% stocks + 20-30% bonds\nNear retirement (60+): 50-60% stocks + 40-50% bonds\n\nThe 4% rule:\n• Withdraw 4% of portfolio annually in retirement\n• Historically safe for 30-year retirement\n• Need 25x annual expenses saved\n• Need $40k/year → Need $1M saved\n• Need $80k/year → Need $2M saved\n\nCompound interest calculator:\n• $500/month for 30 years at 7% return = $566,764\n• $1000/month for 30 years at 7% return = $1,133,528\n\nStart early. Automate. Don't touch it."
            },
            {
              heading: "THE REAL ESTATE DECISION",
              content: "Renting isn't 'throwing money away':\n• Flexibility, no maintenance, no property tax, no transaction costs, can invest the difference\n\nBuying isn't always better:\n• Transaction costs (6-10% to buy and sell)\n• Maintenance (more than you think)\n• Property tax (forever)\n• Less mobility\n• Concentration risk (all wealth in one asset)\n\nWhen buying makes sense:\n• Staying 5+ years\n• Stable income\n• 20% down payment (avoid PMI)\n• Payment <28% of gross income\n• Emergency fund separate from down payment\n\nWhen renting makes sense:\n• Might move in <5 years\n• Unstable income\n• Want mobility\n• Local real estate overpriced\n• Can invest the difference\n\nRun the numbers for YOUR situation."
            },
            {
              heading: "THE INCOME INCREASE PROTOCOL",
              content: "Making more > Saving more (at certain point)\n\nIn current job:\n• Document your wins\n• Research market rate (Glassdoor, Payscale, industry reports)\n• Ask for raise (annually)\n• Script: 'Based on [achievements] and market research showing [data], I'd like to discuss a raise to [number]'\n\nChange jobs:\n• Fastest way to increase income\n• Average 10-20% raise vs. 3% annual raise\n• Every 2-3 years, evaluate market\n\nSide income:\n• Freelance your skills, consulting, digital products, teach what you know\n\nIncrease skills:\n• What skills command higher pay?\n• Online courses, certifications, practice\n• Portfolio of work, document results\n\nThe 10% rule:\n• Every time income increases, save 50% of increase\n• Example: $10k raise → save $5k, lifestyle inflate $5k\n• Prevents lifestyle creep while allowing improvement"
            }
          ]
        },
        {
          id: "phase10",
          title: "PHASE 10: THE LEARNING PLAYBOOK",
          subtitle: "How to Actually Learn Anything",
          sections: [
            {
              heading: "THE BRUTAL TRUTHS ABOUT LEARNING",
              content: "Truth 1: Most learning is inefficient\nTypical approach: Read/watch passively, highlight things, feel like you learned, forget 90% in a week.\n\nTruth 2: Comfort is the enemy of learning\nIf it feels easy, you're not learning, you're reviewing.\n\nTruth 3: Input ≠ Learning\nReading 100 books < Applying concepts from 1 book"
            },
            {
              heading: "THE EVIDENCE-BASED LEARNING PROTOCOL",
              content: "THE FEYNMAN TECHNIQUE:\n1. Pick a concept\n2. Teach it to a child (actually write it out or say it aloud)\n3. Identify gaps (where you struggled to explain)\n4. Review and simplify (go back, learn more, try again)\nWhy it works: You can't fake understanding when you have to explain simply.\n\nACTIVE RECALL > PASSIVE REVIEW:\nDon't: Re-read notes, highlight, summarize\nDo: Close the book, write everything you remember, check what you missed, focus on weak spots\nResearch shows: 50-100% better retention\n\nSPACED REPETITION:\nThe forgetting curve: You forget 50% within 24 hours, 70% within a week\nThe fix: Review at increasing intervals — Day 1 → Day 2 → Day 7 → Day 21 → Day 60\nTools: Anki, Quizlet, or manual flashcards\n\nINTERLEAVING > BLOCKING:\nBlocked practice: AAAA, BBBB, CCCC (feels efficient, low retention)\nInterleaved practice: ABCABCABC (feels harder, high retention)\nExample: Mix verbs, nouns, adjectives in same session\n\nDELIBERATE PRACTICE (Research: Anders Ericsson):\nNot: Mindless repetition\nActually: Focus on weakness, immediate feedback, just beyond current ability, intense focus (no multitasking)\nExample — Learning piano: Isolate the 4 bars you can't play, repeat slowly with metronome\n\nThe 80/20 of any skill: 20% of concepts yield 80% of results. Identify the high-leverage fundamentals first."
            },
            {
              heading: "THE SKILL ACQUISITION PROTOCOL",
              content: "Research: Josh Kaufman (The First 20 Hours)\n\nStep 1: Deconstruct\n• What are the sub-skills?\n• What's the minimum to be functional?\n• What's the core?\nExample — Learning guitar: Sub-skills: chords, strumming, timing, music theory. Core: Chord transitions.\n\nStep 2: Learn enough to self-correct\n• Get 3-5 resources (books, videos, courses)\n• Don't get paralyzed by research\n• Goal: know what 'good' looks like\n\nStep 3: Remove barriers to practice\n• Environment: make it easy to start\n• Tools: have everything ready\n• Time: schedule it, don't 'find time'\n\nStep 4: Practice for at least 20 hours\n• First 20 hours: incompetent → functional\n• Commit to minimum 20 hours before judging\n• Track time (you'll overestimate otherwise)\n\nStep 5: Fast feedback loops\n• How do you know if you're improving?\n• Measure: record yourself, track metrics, get coaching\n• Iterate: adjust based on feedback\n\nExpertise Timeline:\n• 20 hours: Functional beginner\n• 100 hours: Competent amateur\n• 1000 hours: Skilled practitioner\n• 10,000 hours: Expert (controversial research)\nBrutal truth: Most people quit before 20 hours."
            },
            {
              heading: "THE READING PROTOCOL",
              content: "Not all books deserve equal time.\n\nTier 1: Skim (most books)\n• Read intro, conclusion, chapter summaries\n• 30-60 minutes\n• Goal: extract key concepts\n\nTier 2: Read (some books)\n• Full read, with notes\n• 3-10 hours\n• Goal: understand arguments\n\nTier 3: Study (few books)\n• Multiple reads, detailed notes, apply concepts\n• 20+ hours\n• Goal: internalize deeply\n\nMost people do Tier 2 on everything → inefficient\n\nActive reading protocol:\n• Preview: Skim table of contents, intro, conclusion (5 min)\n• Question: What do I want to learn? What are my questions? (2 min)\n• Read actively: Pause every chapter, summarize in own words\n• Recite: Close book, write what you remember (10 min)\n• Review: Skim notes weekly, monthly (5 min periodic)"
            },
            {
              heading: "THE COURSE/TUTORIAL TRAP",
              content: "Warning: Tutorial hell is real.\nSymptoms: Taking course after course, never building anything original, always 'learning' but never doing.\n\nThe fix:\nFor every 1 hour of tutorial:\n• Spend 2 hours building something original\n• Apply the concept to your own project\n• Break something and fix it\n\nBetter: Take minimal course to understand basics, build something hard, Google specific problems as you encounter them. Learn-by-doing beats learn-then-do."
            }
          ]
        },
        {
          id: "phase11",
          title: "PHASE 11: THE HEALTH PLAYBOOK (DEEP DIVE)",
          subtitle: "The Body Keeps Score",
          sections: [
            {
              heading: "THE HEALTH HIERARCHY",
              content: "Level 1: Sleep — Without this, everything else fails.\nLevel 2: Nutrition — You can't out-exercise a bad diet.\nLevel 3: Movement — Humans are designed to move.\nLevel 4: Stress Management — Chronic stress kills, literally.\nLevel 5: Optimization — Supplements, biohacking, etc. (only after 1-4 are solid)"
            },
            {
              heading: "THE SLEEP PROTOCOL (DETAILED)",
              content: "Research: Matthew Walker (Why We Sleep), sleep science literature\n\nThe non-negotiables:\nQuantity: 7-9 hours. Consistently (including weekends). Track: when asleep, when awake, how you feel.\n\nQuality:\n• Room temperature: 65-68°F (18-20°C)\n• Darkness: blackout curtains or eye mask\n• Quiet: earplugs or white noise\n• Comfort: good mattress (you spend 1/3 of life there)\n\nTiming:\n• Same bedtime every night (±30 min)\n• Same wake time every morning (±30 min)\n• Circadian rhythm matters more than you think\n\nCommon sleep destroyers:\nCaffeine: Half-life 5-7 hours. If you sleep at 11pm, last caffeine at 2pm. Yes, it affects you even if 'doesn't keep you awake.'\nAlcohol: Blocks REM sleep, fragments sleep. 'Sleep aid' is actually sedation — not the same.\nStress/anxiety: Journal before bed (brain dump), 'Tomorrow list' (so brain can stop reminding you).\nScreens: Blue light signals 'daytime' to brain. Use f.lux or Night Shift. Better: no screens 1 hour before bed."
            },
            {
              heading: "THE NUTRITION PROTOCOL (DETAILED)",
              content: "1. PROTEIN\nSedentary: 0.8g per lb body weight. Active: 1.0g per lb. Building muscle: 1.2g per lb.\nSources: Animal (chicken, fish, beef, eggs, dairy), Plant (legumes, tofu, tempeh, seitan)\nPractical: 30-40g protein per meal, protein at breakfast (reduces cravings all day)\n\n2. VEGETABLES\nGoal: 5-9 servings daily. Vegetable at every meal. 'Crowd out' strategy (add veggies before restricting other foods).\n\n3. WHOLE FOODS > PROCESSED\nGoal: 80% whole/minimally processed, 20% whatever\nSpectrum: Whole (apple, chicken, rice, vegetables) → Minimally processed (Greek yogurt, frozen vegetables) → Processed (bread, pasta, cheese) → Ultra-processed (chips, cookies, soda, fast food)\n\n4. HYDRATION\nHow much: Half your body weight in ounces. 150 lbs = 75 oz water.\nSigns you're dehydrated: Dark urine, headaches, fatigue, dry skin\nPractical: Water bottle always with you, drink before hungry (thirst mimics hunger)"
            },
            {
              heading: "THE DIET DECISION TREE",
              content: "Brutal truth: The best diet is the one you can stick to. Research shows: All diets work via calorie deficit. The mechanism is secondary.\n\nIntermittent Fasting:\nPro: Simple rules, natural calorie restriction\nCon: Hard if you love breakfast, can mess with hormones (especially women)\nBest for: People who prefer larger meals, don't get hangry\n\nLow Carb/Keto:\nPro: Reduces cravings, good for insulin sensitivity\nCon: Restrictive, hard socially, adaptation period sucks\nBest for: People with blood sugar issues, hate counting calories\n\nMediterranean:\nPro: Sustainable, heart-healthy, delicious\nCon: Vague guidelines, not fast results\nBest for: Long-term lifestyle, not crash diet\n\nWhole Food Plant-Based:\nPro: High fiber, ethical considerations\nCon: Protein requires planning, B12 supplementation\nBest for: Environmental/ethical motivations\n\nThe decision: Try one for 30 days (full commitment). Track: energy, hunger, adherence, results. If sustainable and you feel good → keep it. If miserable → try different approach. No diet is moral. It's just food."
            },
            {
              heading: "THE MOVEMENT PROTOCOL (DETAILED)",
              content: "The minimum effective dose:\n• Cardio: 150 min/week moderate OR 75 min/week vigorous\n• Strength: 2x/week, all major muscle groups with progressive overload\n\nWeekly template:\nMonday: Strength — Lower body (squats, deadlifts, lunges)\nTuesday: Cardio — Moderate (walk, bike, swim) 30-45 min\nWednesday: Strength — Upper body (push + pull)\nThursday: Active recovery (yoga, stretching, light walk)\nFriday: Strength — Full body or weak points\nSaturday: Cardio — Vigorous (run, HIIT, sports)\nSunday: Rest\n\nThe beginner approach:\nWeeks 1-2: 10 min walk daily. That's it.\nWeeks 3-4: 20 min walk daily + 2x/week bodyweight (10 min)\nWeeks 5-8: 30 min walk + 3x/week bodyweight or light weights (20 min)\nWeeks 9-12: 30-40 min activity 5x/week, mix cardio and strength\n\nCommon mistakes:\n• Too much too soon → Injury, burnout, quit (Fix: Start embarrassingly easy)\n• No progression → Plateaus, boredom (Fix: Track workouts, increase 5-10% weekly)\n• All cardio or all strength → Imbalanced fitness (Fix: Both matter, do both)\n• Ignoring recovery → Overtraining, injury (Fix: Sleep, nutrition, rest days)"
            },
            {
              heading: "THE STRESS MANAGEMENT PROTOCOL",
              content: "Chronic stress kills via: Cardiovascular disease, weakened immune system, mental health decline, accelerated aging.\n\nThe protocol:\nMorning (daily): 5 min breathing exercises (box breathing: 4-4-4-4), 10 min movement, set daily intention.\nThroughout day: Micro-breaks 5 min every hour, boundaries (say no to non-essential), check-ins ('Am I tense?').\nEvening: 10 min journal (brain dump), 10 min gratitude practice (3 specific things), disconnect from work.\nWeekly: 2+ hours outdoors, meaningful social connection.\nMonthly: Evaluate stressors, schedule fun, audit commitments.\n\nBreathing techniques:\nBox breathing (calm nervous system): Inhale 4, Hold 4, Exhale 4, Hold 4. Repeat 5 minutes.\n4-7-8 breathing (for sleep): Inhale 4, Hold 7, Exhale 8. Repeat 4 cycles.\nPhysiological sigh (quick reset): Deep inhale through nose, second quick inhale (top off lungs), long exhale through mouth. Repeat 3 times."
            },
            {
              heading: "THE SUPPLEMENTS DISCUSSION",
              content: "Brutal truth: Most supplements are waste of money.\n\nWorth taking (strong evidence):\n• Vitamin D (if deficient — get blood test)\n• Omega-3 (if don't eat fish 2x/week)\n• Protein powder (if can't hit protein goals with food)\n• Creatine (if strength training — 5g daily)\n\nMaybe worth taking:\n• Magnesium (if sleep issues, muscle cramps)\n• Probiotics (if gut issues — but food sources better)\n\nProbably waste of money:\n• Multivitamins (pee out most of it)\n• Fat burners (no magic pill)\n• Testosterone boosters (if you're deficient, need actual treatment)\n• Most 'superfoods' in pill form\n\nGet nutrients from food first. Supplement gaps second."
            }
          ]
        },
        {
          id: "phase12",
          title: "PHASE 12: THE EXECUTION PLAYBOOK",
          subtitle: "From Planning to Doing",
          sections: [
            {
              heading: "THE ANTI-PROCRASTINATION PROTOCOL",
              content: "Why you procrastinate:\nNot: Laziness\nActually: One or more of these:\n• Task aversion (it's unpleasant)\n• Perfectionism (it won't be good enough)\n• Fear (of failure, success, judgment)\n• Overwhelm (don't know where to start)\n• No consequences (deadline too far away)\n\nThe fix by type:\nFor task aversion: 5-minute rule (just do 5 minutes), pair with reward, go somewhere new.\nFor perfectionism: Permission to suck (first draft is always shit), time-box (30 min then done), ship it anyway (done > perfect).\nFor fear: Name it ('I'm afraid of [specific thing]'), worst case scenario, decouple identity from task.\nFor overwhelm: Brain dump (write everything down), pick ONE thing, do that one thing, ignore everything else.\nFor no consequences: Artificial deadline (tell someone, bet money), stakes ('If I don't do this by [date], I will [consequence]'), accountability partner."
            },
            {
              heading: "THE DEEP WORK PROTOCOL",
              content: "Research: Cal Newport (Deep Work)\n\nDeep work: Focused, cognitively demanding tasks that create value.\nShallow work: Email, meetings, admin, easy tasks.\nMost people: 10% deep, 90% shallow → mediocre results\nTop performers: 40-60% deep → exceptional results\n\nHow to create deep work:\nTime blocking: 2-4 hour calendar blocks. No meetings during deep work. Treat it like an appointment.\nEnvironment: Separate space (library, coffee shop, closed office). Remove distractions (phone in different room). Signal to others (door closed, headphones on).\nRitual: Same time, same place, same process. Brain learns: this is deep work time. Less willpower needed.\n\nExample ritual:\n9am: Arrive at deep work location\n9:00-9:10: Review what I'm working on, clear plan\n9:10-11:30: Deep work (no interruptions)\n11:30: Break, move, eat\n12:00-2:00: Deep work session 2\n2:00: Done with deep work for day\n\nShallow work in the gaps: Email batches 2x daily. Meetings clustered in afternoon. Admin last hour of day."
            },
            {
              heading: "THE WEEKLY PLANNING PROTOCOL",
              content: "Sunday evening (30 min):\n\n1. Weekly review: What went well last week? What didn't? What did I learn?\n\n2. Weekly priorities: What are the 3 most important OUTCOMES this week? (Not tasks — OUTCOMES. Not 'work on project' but 'complete project phase 1')\n\n3. Time blocking: When will deep work happen? When will shallow work happen? When will recovery happen?\n\n4. Obstacle planning: What will try to derail me? How will I handle it? What's my backup plan?\n\nDaily planning (5 min):\nMorning: Review weekly priorities. What's the ONE thing that must happen today? When will I do it?\nEvening: Did I do the ONE thing? What's tomorrow's ONE thing? Any adjustments to weekly plan?"
            },
            {
              heading: "THE PRODUCTIVITY SYSTEM",
              content: "Not: Track everything in 50 apps\nActually: Simple, consistent system\n\nCalendar: Time blocks for deep work, commitments (meetings, appointments). Nothing else.\n\nTask manager: Capture everything, weekly review and prioritize, daily: What's next?\n\nNotes: Ideas, learnings, references. Searchable. Doesn't have to be fancy.\n\nOptions:\n• Simple: Paper notebook + Google Calendar\n• Digital: Todoist + Calendar + Notion\nPick ONE system, stick with it."
            },
            {
              heading: "THE DECISION-MAKING PROTOCOL",
              content: "For small decisions (<$100, <1 hour impact):\n2-minute rule: decide in 2 minutes or less. Don't overthink.\n\nFor medium decisions (<$1000, <1 month impact):\nList pros and cons, sleep on it, decide within 48 hours.\n\nFor big decisions (>$1000, >1 month impact):\nResearch (gather data), perspective (talk to 3 people who've done it), test (pilot if possible), time-box decision (1-2 weeks research, then decide).\n\nThe regret minimization framework (Bezos):\n'In X years, which decision will I regret less?'\nUsually: The scary one, not the safe one.\n\nThe reversibility test:\n• Reversible: Make it quickly\n• Irreversible: Take more time\n\nThe gut check: After analysis, what does intuition say? Intuition = pattern recognition from experience. Useful, but verify with data."
            }
          ]
        },
        {
          id: "phase13",
          title: "PHASE 13: THE MAINTENANCE PLAYBOOK",
          subtitle: "How to Not Lose Progress",
          sections: [
            {
              heading: "THE BRUTAL TRUTH ABOUT MAINTENANCE",
              content: "Getting there is hard. Staying there is harder.\n\nWhy people regress:\n• Stop doing what got results\n• Declare 'done' when it's never done\n• No monitoring system\n• Environmental change\n\nThe fix: Build maintenance into the system from the start. Review → Adjust → Continue."
            },
            {
              heading: "THE REVIEW CADENCE",
              content: "WEEKLY CHECK-INS (15 min):\nHealth: Weight/measurements, energy levels, sleep quality, nutrition adherence\nProductivity: Deep work hours, key projects advanced, distractions managed\nRelationships: Quality time with important people, conflicts addressed, boundaries maintained\nFinances: Spending on track, savings automated, no surprise expenses\nMental health: Mood stability, stress level, self-care practices\n\nMONTHLY REVIEW (1 hour):\nProgress check: Are metrics improving, stable, or declining? Which areas need attention?\nSystem audit: Which habits are automatic? Which require effort? What's slipping?\nAdjust: Double down on what's working, fix what's slipping, eliminate what's not worth it.\n\nQUARTERLY AUDIT (3 hours):\nDeep reflection: Am I living according to my values? Are my goals still relevant?\nRelationship review: Which relationships energize me? Which drain me?\nCareer check: Am I learning and growing? Is trajectory right? Time for change?\n\nANNUAL REVIEW (full day):\nYear in review: Highlights, lowlights, lessons learned\nNext year planning: 3-5 major goals, systems to support them, what needs to change"
            },
            {
              heading: "THE RELAPSE PROTOCOL",
              content: "When you fall off track (you will):\n\nStep 1: Notice without judgment\n'I've slipped on [habit]' — Not 'I'm a failure.' Just data.\n\nStep 2: Identify the trigger\nWhat changed? Travel? Stress? Busy period? Understand why.\n\nStep 3: Restart immediately\nDon't wait for Monday. Don't wait for perfect circumstances. Today.\n\nStep 4: Make it easier\nWhat made it hard? How can you reduce friction? Adjust the system.\n\nExample:\nStopped working out for 3 weeks.\nNot: 'I'm lazy, I'll never be consistent'\nActually:\n• Notice: 'I haven't worked out in 3 weeks'\n• Trigger: 'Work got crazy and gym is 20 min away'\n• Restart: 'Tomorrow I'll do 10 min home workout'\n• Adjust: 'I'll do home workouts during busy periods, gym when time allows'"
            },
            {
              heading: "THE HABIT STACKING PROTOCOL",
              content: "To maintain multiple habits:\nDon't: Try to remember everything\nDo: Chain habits together\n\nExample morning routine:\nWake up → Make bed (2 min)\nMake bed → Drink water (1 min)\nDrink water → Meditate (10 min)\nMeditate → Exercise (30 min)\nExercise → Shower (10 min)\nShower → Healthy breakfast (15 min)\nBreakfast → Review daily plan (5 min)\n\nTotal: 73 minutes, 7 habits, automatic sequence. Each step triggers the next. No decision needed."
            },
            {
              heading: "THE ENVIRONMENT DESIGN",
              content: "Your environment determines behavior more than willpower.\n\nAt home:\n• Healthy food visible (fruit bowl on counter)\n• Junk food invisible or gone\n• Workout clothes laid out\n• Books on nightstand (not phone)\n• Clean, organized space\n\nAt work:\n• Phone in drawer during deep work\n• Website blockers installed\n• Headphones visible (signal 'focused')\n• Water bottle on desk\n• Natural light if possible\n\nSocial:\n• Spend time with people who have habits you want\n• Remove/limit people who pull you down\n• Join communities aligned with goals\n\nDigital:\n• Unsubscribe from tempting emails\n• Delete apps that waste time\n• Use tools that support goals\n• Automate good behaviors"
            }
          ]
        },
        {
          id: "phase14",
          title: "PHASE 14: THE FINAL PROTOCOL",
          subtitle: "Living This, Not Just Reading It",
          sections: [
            {
              heading: "THE IMPLEMENTATION CHOICE",
              content: "You've read this whole brutal playbook. Now what?\n\nOption 1: Do nothing\n• Close this, feel inspired for 24 hours, return to old patterns, nothing changes\n\nOption 2: Try everything at once\n• Overwhelm yourself, fail at most things, get discouraged, quit\n\nOption 3: The actual way\n• Pick ONE area from Phase 1 (Triage)\n• Implement ONE system from Phase 2\n• Track for 30 days\n• Then add next thing"
            },
            {
              heading: "YOUR 90-DAY ROADMAP",
              content: "Days 1-7: The Audit\n• Complete the 7-day tracking\n• Answer the brutal questions\n• Identify Tier 1 emergencies\n• Choose starting point\n\nDays 8-37: Foundation (Month 1)\n• Fix one Tier 1 or Tier 2 issue\n• Build one keystone habit\n• Track daily (no excuses)\n• Weekly review\n\nDays 38-67: Expansion (Month 2)\n• First habit should be automatic\n• Add second habit or system\n• Continue tracking\n• Monthly audit\n\nDays 68-90: Integration (Month 3)\n• Two habits automatic\n• Add third if ready\n• Systems working together\n• Quarterly review"
            },
            {
              heading: "THE COMMITMENT",
              content: "If you're serious about this:\n\n1. Pick your starting point RIGHT NOW\n• Which area needs immediate attention?\n• What's the ONE thing to change?\n\n2. Make it embarrassingly small\n• Can you do it on your worst day?\n• If no, make it smaller\n\n3. Create accountability\n• Tell someone\n• Public commitment\n• Bet money\n• Join community\n\n4. Track ruthlessly\n• Simple: ✓ or ✗\n• Daily\n• No excuses\n\n5. Review weekly\n• What worked?\n• What didn't?\n• What's next?"
            },
            {
              heading: "THE BRUTAL REMINDER",
              content: "This playbook won't change your life.\nYou changing your behavior will.\n\nReading ≠ Doing\nKnowing ≠ Applying\nPlanning ≠ Executing\n\nThe difference between who you are and who you want to be is what you do every single day.\n\nNot what you think about doing.\nNot what you plan to do.\nNot what you feel inspired to do.\nWhat you actually do.\n\nYOUR NEXT STEP:\nClose this document.\nOpen your calendar.\nBlock 30 minutes this week for Phase 0: The Audit.\nDo it now. Not later. Now.\nOr close this and admit you're not ready to change.\nBoth are honest choices. Only one leads somewhere different. What's it going to be?"
            }
          ]
        }
      ]
    },
    christCentered: {
      title: "The Brutal Playbook",
      subtitle: "A No-Bullshit Guide to Unfucking Your Life (With Joy, Play, and Christ at the Center)",
      color: "#4F46E5",
      phases: [
        {
          id: "cc-phase0",
          title: "PHASE 0: THE AUDIT (WITH PLAYFUL HONESTY)",
          subtitle: "The Part Everyone Skips Because It's Uncomfortable",
          sections: [
            {
              heading: "🔥 FOUNDATIONAL TRUTH (REVISED)",
              content: "Most self-help makes you feel good temporarily. Most religion makes you feel guilty constantly. Neither changes you.\n\nThe brutal facts:\n• You're lying to yourself about something important right now\n• Your comfort zone is a decorated cage\n• Motivation is garbage. Grace + discipline = everything\n• You will resist what helps most\n• Jesus didn't die so you could live a mediocre, joyless life\n• Reading this won't change anything. Doing will. With Him.\n\nThe Christ-centered frame:\n• You're created in God's image with purpose (Genesis 1:27)\n• Your body is a temple (1 Corinthians 6:19)\n• Work as unto the Lord (Colossians 3:23)\n• Rest is commanded, not optional (Exodus 20:8-11)\n• Joy is fruit of the Spirit (Galatians 5:22)\n• Stewardship matters (Matthew 25:14-30)"
            },
            {
              heading: "THE 7-DAY TRUTH TRACKING (EXPANDED)",
              content: "Same tracking as original, PLUS add:\n\nSPIRITUAL:\n• Prayer time (actual minutes, not 'thought about God')\n• Scripture reading (chapters/verses, be honest)\n• Worship (participated or just showed up?)\n• Service to others (what did you actually do?)\n• Community (real fellowship or just coffee after service?)\n\nJOY/PLAY:\n• Genuine laughter (how many times?)\n• Playful moments (with kids, pets, hobbies)\n• Creative expression (made anything?)\n• Moments of wonder (noticed beauty, felt grateful)\n• Sabbath rest (did you actually rest or 'productively relax'?)"
            },
            {
              heading: "THE BRUTAL QUESTIONS (CHRIST-CENTERED)",
              content: "After 7 days:\n\n1. Where's the gap between who God says you are and how you're living?\n• He says you're worthy, loved, purposeful\n• Are you living like someone who believes that?\n\n2. What are you avoiding that God keeps bringing up?\n• That conversation?\n• That forgiveness?\n• That calling you keep pushing away?\n\n3. Where's your treasure? (Matthew 6:21)\n• Track your time and money - they reveal your heart\n• 30 hours on screens, 30 minutes with God = who's your god?\n\n4. Are you experiencing the 'abundant life' Jesus promised? (John 10:10)\n• Or are you just surviving?\n• What's stealing your joy?\n\n5. When do you feel most alive and close to God?\n• Those moments = clues to your design\n• Are you creating space for more of them?"
            },
            {
              heading: "REAL EXAMPLES: Success & Failure",
              content: "SUCCESS - Sarah, 34, Marketing Manager:\n• The audit revealed: 45 hours/week work, 15 hours screens, 2 hours with kids, 20 minutes prayer\n• Brutal truth: Said family and God were priorities, time said otherwise\n• Changed: Cut screen time to 5 hours, reallocated to family time and morning prayer\n• 6 months later: Closer relationship with kids, peace she hadn't felt in years, actually heard God in the quiet\n• The playful part: Made family game nights mandatory, phone stacking game at dinner (first to check phone does dishes)\n\nFAILURE - Marcus, 28, Teacher:\n• The audit revealed same gaps\n• Tried to fix everything at once: wake at 5am for prayer, workout, meal prep, new budget, read Bible in a year\n• Lasted 4 days\n• Burned out, felt like spiritual failure, quit everything\n• What he learned: Start with ONE thing. He restarted with just 10-minute morning prayer. Built from there.\n• The playful pivot: Made it 'coffee with Jesus' — literally sat with coffee and talked to God like a friend"
            }
          ]
        },
        {
          id: "cc-phase1",
          title: "PHASE 1: TRIAGE (CHRIST-CENTERED)",
          subtitle: "Fix the Bleeding First, With Eternal Perspective",
          sections: [
            {
              heading: "PRAYER POSTURE FOR EMERGENCIES",
              content: "When in crisis, Jesus' example:\n• Garden of Gethsemane: 'Not my will, but yours' (Luke 22:42)\n• On the cross: 'Father, forgive them' (Luke 23:34)\n• In storms: 'Peace, be still' (Mark 4:39)\n\nPractical + Spiritual approach to every crisis tier"
            },
            {
              heading: "MONEY CRISIS (CHRIST-CENTERED)",
              content: "Pray: 'God, I need wisdom. Show me the way.' (James 1:5)\nAct: Everything from original protocol\nCommunity: Tell your church/small group — that's what body of Christ is for\nTrust: 'My God will supply every need' (Philippians 4:19) - but also get a job"
            },
            {
              heading: "REAL EXAMPLE - David, 41, Laid Off",
              content: "• Prayed and panicked simultaneously\n• Told his small group (embarrassing but necessary)\n• They helped with resume, connections, groceries\n• Took temp work (humbling — he was formerly director)\n• Found better job 4 months later through church connection\n• Playful redemption: Now leads 'Career Transitions' group at church, uses humor about his 'wilderness period'"
            },
            {
              heading: "HEALTH CRISIS (CHRIST-CENTERED)",
              content: "Pray: Jesus healed, but also see doctors (Luke the physician was valued)\nAct: Original protocol stands\nAnointing of the sick (James 5:14) — if that's your tradition\nMental health: Therapy isn't lack of faith, it's wisdom"
            },
            {
              heading: "REAL EXAMPLE - Jennifer, 29, Severe Anxiety",
              content: "• Christian community said 'just pray more' (unhelpful)\n• Felt like spiritual failure\n• Finally got therapy + medication\n• Still prays, but now has tools to manage\n• Her brutal truth: 'God gave us brains that make serotonin. Mine doesn't. Medicine is God's provision through science.'"
            },
            {
              heading: "SAFETY CRISIS (CHRIST-CENTERED)",
              content: "God hates abuse (Malachi 2:16 addresses violence in marriage)\nJesus welcomed vulnerable (Matthew 19:14)\nGet safe first, figure out faith questions later\nChurch should help, not shame"
            },
            {
              heading: "TIER 2: FOUNDATION - Physical Health (The Temple Maintenance)",
              content: "1 Corinthians 6:19-20: 'Your body is a temple of the Holy Spirit... honor God with your body'\n\nReframe the why:\n• Not: 'I need to look good' (vanity)\n• Actually: 'I'm stewarding what God gave me' (responsibility)\n• Also: 'I want energy to serve and enjoy life' (purpose)\n\nPlayful approach:\n• Call sleep 'sacred rest' - God rested on day 7\n• Call movement 'celebration of what your body can do'\n• Break bread like Jesus did - with people, with gratitude\n\nSleep (Month 1):\nCall it 'sacred rest' — God rested on day 7\nSame protocol as before\nAdd: Evening gratitude prayer before bed (better than scrolling)\n\nSuccess example: Tom made bedtime routine include reading Psalms instead of news. Sleep improved, anxiety decreased, actually enjoyed it.\nFailure example: Amanda tried 9pm bedtime while binge-watching shows. Lasted 2 days. Learned: Remove temptation first.\n\nMovement (Month 1):\nCall it 'celebration of what your body can do' — not punishment for what you ate\nPlayful option: Dance worship, hiking as prayer time, family bike rides, sports with friends\nSuccess: Maria joined church softball league. Got fit, made friends, laughed weekly. 'Most fun I've had exercising ever.'\nFailure: Kevin joined CrossFit to 'get in God-honoring shape.' Injured in week 3, felt defeated. Learned: Start slower.\n\nNutrition (Month 2):\nBreak bread like Jesus did — with people, with gratitude\nFood is gift, not enemy. Eating well isn't vanity, it's stewardship.\nPlayful: Try cooking Biblical foods (Mediterranean diet is basically Biblical), meal prep with worship music, family cooking nights\nSuccess: The Johnsons made Sunday meal prep a family event — kids helped, music played, laughed at mistakes. Healthy eating became family bonding.\nFailure: Rachel tried ultra-restrictive 'Bible diet.' Miserable, legalistic, quit. Learned: Grace in food too."
            },
            {
              heading: "TIER 2: FOUNDATION - Mental Health (Renewing the Mind)",
              content: "Romans 12:2: 'Be transformed by the renewing of your mind'\n\nBrtal truth: Mental illness isn't demonic. It's not lack of faith. It's human brokenness in a fallen world.\n\nChrist-centered approach:\n• Prayer + Therapy (both/and, not either/or)\n• Journaling = Prayer on paper (David wrote Psalms - therapy through poetry)\n• Meditation = Contemplative prayer (filling mind with God, not emptying it)\n• Community as healing: 'Confess your sins to one another' (James 5:16)\n\nSuccess: Small group covenant: one real struggle per meeting. Awkward at first, life-changing after.\nFailure: Tried to 'fake it till you make it' in church. Felt lonelier than before. Learned: Vulnerability is strength."
            },
            {
              heading: "TIER 2: FOUNDATION - Financial Stability (Faithful Stewardship)",
              content: "Luke 16:10: 'Faithful in little, faithful in much'\nMatthew 6:24: 'Cannot serve God and money'\n\nStewardship mindset:\n• It's all God's, you're managing it\n• Not: 'My money, how much do I give to God?'\n• Actually: 'God's money, how do I steward it?'\n\nThe practical order:\n1. Food, shelter, utilities (survival)\n2. Debt minimums (avoid default)\n3. Small emergency fund ($1000)\n4. Generous giving (as able)\n5. Debt payoff\n6. Build full emergency fund\n7. Invest for future\n\nThe giving component:\nBefore you panic about tithing:\n• Research the theology (seriously, scholars debate)\n• Old Testament: 10% was tax for theocracy\n• New Testament: Cheerful, generous, proportional (2 Corinthians 9:7)\n• Brutal truth: If in crisis, stabilize first. God doesn't want you homeless to give to church."
            },
            {
              heading: "REAL EXAMPLES - Financial Stewardship",
              content: "SUCCESS - The Martinez family:\n• $45k debt, drowning\n• Started giving $50/month (what they could)\n• Cut expenses ruthlessly\n• Paid off debt in 3 years\n• Now give 15% joyfully\n• The playful part: Made debt payoff visual (thermometer chart on fridge), celebrated each payoff with ice cream\n\nFAILURE - Brad:\n• Heard 'tithe for blessing' prosperity gospel\n• Gave 10% while broke\n• Couldn't pay rent\n• Lost apartment\n• What he learned: God isn't a slot machine. Stewardship includes wisdom about timing."
            }
          ]
        },
        {
          id: "cc-phase2",
          title: "PHASE 2: SYSTEMS OVER GOALS (GRACE-FILLED DISCIPLINE)",
          subtitle: "How to Actually Change With God's Help",
          sections: [
            {
              heading: "PHILIPPIANS 2:12-13 BALANCE",
              content: "'Work out your salvation... for it is God who works in you'\n\nThe balance:\n• You work (discipline, effort, systems)\n• God works (grace, power, transformation)\n• Not either/or, it's both/and"
            },
            {
              heading: "THE SYSTEM-BUILDING PROTOCOL (WITH JOY)",
              content: "Step 1: Pick ONE area\n• Pray first: 'God, what needs to change?'\n• Be honest: What's He been nudging you about?\n\nStep 2: Define minimum viable action\n❌ 'Read Bible for an hour'\n✅ 'Read one verse, talk to God about it'\n\nStep 3: Anchor to existing behavior + add prayer\n'After I [existing habit], I will [new tiny habit] and thank God for [something]'\n\nStep 4: Track with grace\n• Did it = ✓ + gratitude\n• Didn't = ✗ + 'Tomorrow's a new mercy' (Lamentations 3:22-23)\n\nStep 5: The 30-day rule (with Sabbath)\n• 30 days with grace on Sundays if needed\n• If you miss, don't restart count - just continue\n• Progress > perfection"
            },
            {
              heading: "REAL EXAMPLES - Systems With Grace",
              content: "SUCCESS - Lisa, morning prayer:\n• Habit: Coffee + 5-minute Scripture\n• Anchored to: Making coffee (already did daily)\n• Made it fun: Fancy coffee varieties, cozy corner, nice journal\n• 90 days later: 'Best part of my day. I miss it when I skip.'\n\nFAILURE - Tom, evening Bible reading:\n• Tried to read after exhausting workday\n• Would fall asleep mid-verse\n• Felt guilty, quit\n• Pivot: Moved to morning, started with just 2 verses, worked perfectly\n• Learned: Work with your energy, not against it"
            }
          ]
        },
        {
          id: "cc-phase3",
          title: "PHASE 3: THE HARD CONVERSATIONS (WITH CHRIST'S COURAGE)",
          subtitle: "What You're Avoiding",
          sections: [
            {
              heading: "THE PROTOCOL FOR HARD THINGS (JESUS' WAY)",
              content: "Jesus' example:\n• Spoke truth, always in love\n• Confronted with questions, not attacks\n• Made space for response\n• Prioritized people over rules\n• Called out hypocrisy (especially religious)\n• Forgave radically\n\nPrayer before hard conversations:\n'God, give me:\n• Courage to speak truth\n• Love to speak gently\n• Wisdom to know timing\n• Humility to hear response\n• Grace to forgive regardless of outcome'"
            },
            {
              heading: "THE AVOIDANCE INVENTORY (SPIRITUAL EDITION)",
              content: "Add to the original list:\n\nSPIRITUAL:\n• Confess sin to someone\n• Address false teaching you're tolerating\n• Leave toxic church\n• Share faith with someone\n• Apologize for how you represented Christ\n• Set boundaries with religious manipulation\n• Ask for prayer about deep struggle\n• Address hypocrisy in your life"
            },
            {
              heading: "REAL EXAMPLES - Hard Conversations",
              content: "SUCCESS - Maria confronting friend:\n• Friend making racist comments, claimed 'Christian values'\n• Maria prayed for week\n• Had conversation: 'I love you, but this doesn't align with loving everyone as image-bearers. Can we talk?'\n• Friend got defensive, then thoughtful\n• 3 months later: 'You were right. I'm working on it.'\n• The playful part: They now send each other memes calling out hypocrisy (theirs and others)\n\nFAILURE - Kevin avoiding church issues:\n• Pastor verbally abusive to staff\n• Kevin knew, said nothing for years ('pray about it')\n• Staff burned out, left ministry\n• Kevin finally spoke up, but damage done\n• Learned: Silence isn't always golden. Speaking up is love.\n\nSUCCESS - The forgiveness conversation:\n• Dad abandoned family 20 years ago\n• Sarah carried bitterness\n• God kept prompting: forgive\n• She wrote letter (never sent), forgave for her own healing\n• Year later, dad reached out wanting reconciliation\n• Her words: 'I'd already forgiven him in my heart. The conversation was easier because I wasn't coming from anger.'"
            }
          ]
        },
        {
          id: "cc-phase4",
          title: "PHASE 4: THE RESEARCH PROTOCOLS (TRUTH-SEEKING)",
          subtitle: "How to Find Truth in a Bullshit World",
          sections: [
            {
              heading: "JOHN 8:32 AND 1 THESSALONIANS 5:21",
              content: "John 8:32: 'You will know the truth, and the truth will set you free'\n1 Thessalonians 5:21: 'Test everything, hold fast what is good'\n\nBrutal truth: Not everything labeled 'Christian' is true. Not everything labeled 'secular' is false."
            },
            {
              heading: "THE CHRISTIAN DISCERNMENT PROTOCOL",
              content: "For any spiritual/life claim:\n\n1. 'Does this align with Scripture?'\n• Not cherry-picked verses\n• Whole counsel of God\n• Context matters\n• Check multiple translations\n\n2. 'What's the fruit?' (Matthew 7:16)\n• Does it produce love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control?\n• Or fear, guilt, manipulation, control, division?\n\n3. 'Who benefits financially/powerfully?'\n• Prosperity gospel red flag: 'Sow seed, get blessing'\n• Manipulation red flag: 'Don't question leadership'\n• Control red flag: 'Leave and you'll lose salvation'\n\n4. 'What do mature believers say?'\n• Not just one pastor/influencer\n• Counsel from multiple wise people\n• Historical church wisdom (not just current trends)\n\n5. 'Does it sound too good to be true?'\n• 'Pray this prayer, get rich' → Probably false\n• 'God wants you comfortable always' → Not Biblical\n• 'Real Christians never struggle/doubt' → Lies"
            },
            {
              heading: "REAL EXAMPLES - Discernment",
              content: "SUCCESS - Jason researching theology:\n• Heard 'wealth prosperity' teaching\n• Sounded good, wanted to believe\n• Researched: checked verses in context, read opposing views, asked pastors he trusted\n• Found: Taken out of context, ignores suffering passages, historically rejected\n• Playful outcome: Made 'Bad Theology Bingo' card with friends, spots common false teachings\n\nFAILURE - Amanda fell for MLM:\n• Christian company, quoted Scripture\n• 'God wants you prosperous'\n• Lost $5k, alienated friends\n• Learned: Quoting Bible doesn't make it true. Check fruit, check theology, check math."
            },
            {
              heading: "WHERE TO ACTUALLY RESEARCH (CHRISTIAN + GENERAL)",
              content: "THEOLOGY/SCRIPTURE:\n• Blue Letter Bible (free, multiple translations, Strong's)\n• Bible Project (videos explaining context)\n• GotQuestions.org (doctrinal answers with sources)\n• Desiring God, The Gospel Coalition (solid theology, check your tradition)\n• Seminary resources (not just popular books)\n\nLIFE WISDOM:\n• Same sources as original (PubMed, etc.)\n• Plus: Christian counselors, pastors with training\n• Watch for: 'Christian' label on unbiblical ideas\n\nThe Brutal Filter (Christian edition):\n• If it makes God a vending machine → False\n• If it makes you earn salvation → False\n• If it makes you fear instead of love → Probably false\n• If leaders can't be questioned → Run"
            }
          ]
        },
        {
          id: "cc-phase5",
          title: "PHASE 5: THE EXPERIMENTS (WITH PLAYFUL FAITH)",
          subtitle: "Scientific Method Meets Spirit-Led Life",
          sections: [
            {
              heading: "30-DAY PRAYER EXPERIMENT",
              content: "Hypothesis: 'If I pray 10 min daily for 30 days, my anxiety will decrease and clarity will increase'\nMeasure: Anxiety scale 1-10 (morning/evening), decision clarity (journal)\nVariables: Same time daily, quiet place\n\nSuccess example — Rachel: Anxiety 8→4, 'Never felt so clear about life direction'\nFailure example — Tom: Missed 12 days, inconsistent. Tried again with alarm reminder, worked."
            },
            {
              heading: "30-DAY GRATITUDE EXPERIMENT",
              content: "Hypothesis: 'If I list 3 specific things I'm grateful for daily, mood will improve'\nMeasure: Mood score 1-10, positive/negative thought ratio\n\nSuccess — Maria: 'Completely changed my perspective. I look for good now.'\nPlayful twist: Photos of things she's grateful for, made album"
            },
            {
              heading: "60-DAY SABBATH EXPERIMENT",
              content: "Hypothesis: 'If I truly rest one day weekly, productivity on other 6 days improves'\nMeasure: Work output, stress level, joy level\n\nSuccess — The Kim family: 'Game changer. We're more productive AND happier.'\nPlayful: Made Sabbath about fun — games, hikes, laughter, no guilt"
            },
            {
              heading: "90-DAY SERVICE EXPERIMENT",
              content: "Hypothesis: 'If I serve others 2 hours weekly, my own problems feel more manageable'\nMeasure: Life satisfaction, purpose feeling, perspective on own struggles\n\nSuccess — David: Volunteered at homeless shelter. 'My problems aren't as big as I thought. And I actually matter.'"
            },
            {
              heading: "90-DAY GENEROSITY EXPERIMENT",
              content: "Hypothesis: 'If I give x% monthly, financial anxiety decreases (sounds counterintuitive)'\nMeasure: Financial stress scale, actual bank balance, trust in God\n\nSuccess — Sarah: 'Terrified to give when broke. Did anyway. Somehow always had enough. Can't explain it.'\nFailure — Mike: Gave irresponsibly, couldn't pay bills. Learned: Generosity includes wisdom."
            },
            {
              heading: "PLAYFUL SPIRITUAL EXPERIMENTS",
              content: "The 'Yes Day' to God:\nOne day, say yes to every prompting you think is from God (within reason)\nExample — Lisa's Yes Day:\n• Felt nudge to buy coffee for person behind her → They were having worst day, cried from kindness\n• Felt nudge to text old friend → Friend was contemplating suicide, Lisa's text saved her life\n• Her words: 'Scariest, most alive day of my life'\n\nThe 'Technology Sabbath':\n24 hours, no phone/screens except emergencies\nExample — Johnson family:\n• Kids protested\n• Played board games, went to park, talked\n• Kids asked to do it monthly\n• Playful discovery: 'We actually like each other'\n\nThe 'Ordinary Miracle Watch':\n30 days, journal one 'ordinary miracle' daily (beauty, provision, timing, connection)\nExample — Tom: 'Started skeptical. Ended up seeing God everywhere — sunsets, parking spots, chance meetings, kids' laughter.'"
            }
          ]
        },
        {
          id: "cc-phase6",
          title: "PHASE 6: THE INNER GAME (RENEWING THE MIND)",
          subtitle: "Psychology Meets Spirit",
          sections: [
            {
              heading: "COGNITIVE DISTORTIONS (RECOGNIZING LIES)",
              content: "Romans 12:2: 'Be transformed by renewing of your mind'\n2 Corinthians 10:5: 'Take every thought captive to obey Christ'\n\nAll-or-nothing thinking:\n• Lie: 'I sinned, I'm worthless to God'\n• Truth: 'I sinned, I'm forgiven, I'm growing' (1 John 1:9)\n\nOvergeneralization:\n• Lie: 'I failed at witnessing once, I'm a terrible Christian'\n• Truth: 'I'm learning. Peter denied Jesus 3 times, became church leader'\n\nCatastrophizing:\n• Lie: 'This problem will destroy me'\n• Truth: 'God works all things for good' (Romans 8:28) — doesn't mean it won't be hard\n\nThe Fix:\n• Notice distortion\n• Ask: 'What would Jesus say about this?'\n• Replace lie with truth\n\nReal example — Sarah's thought spiral:\n• Distortion: 'I yelled at my kids, I'm a terrible mother, God can't use me'\n• Truth replacement: 'I'm human, I sinned, I apologized, I'm learning, God uses imperfect people (literally all of them)'\n• Playful reminder: Made sign: 'Even the disciples were a mess. I'm in good company.'"
            },
            {
              heading: "IDENTITY IN CHRIST (WHO YOU ACTUALLY ARE)",
              content: "Not: 'I'm trying to be good enough for God'\nActually: 'I'm already loved, now I'm becoming who I am'\n\nYour identity (Ephesians 1-2):\n• Chosen\n• Adopted\n• Redeemed\n• Forgiven\n• Sealed\n• Seated with Christ\n• God's workmanship\n\nThe brutal truth: You're not working FOR acceptance. You're working FROM acceptance.\n\nReal example — Marcus:\n• Grew up in performance-based Christianity\n• Never good enough\n• Burned out trying to earn love\n• Discovery: 'God loved me before I did anything. My work is response, not payment.'\n• Playful shift: Stopped saying 'I have to pray/serve/read Bible' → Started saying 'I get to'"
            },
            {
              heading: "GRACE + DISCIPLINE (BOTH/AND, NOT EITHER/OR)",
              content: "Titus 2:11-12: 'Grace... teaches us to say No to ungodliness'\n\nNot: 'Grace means I can do whatever' (cheap grace)\nNot: 'I must be perfect' (legalism)\nActually: 'Grace empowers discipline. Discipline shows I value grace.'\n\nPractical:\n• God's grace covers failure\n• Your discipline shows you care\n• Grace without growth = presumption\n• Growth without grace = burnout\n\nLEGALISM — Amy:\n'I must work out to honor God' — Rigid, joyless, punitive. Missed day = guilt spiral. Burnout in 2 months.\n\nCHEAP GRACE — Tom:\n'God loves me as I am' — Never took care of body. Health crisis at 45. 'God loves me' isn't excuse for neglect.\n\nGRACE + DISCIPLINE — Lisa:\n'I'm stewarding God's gift to me' — Workout schedule, but grace when life happens. Missed days without guilt. Consistency without rigidity. 5 years later: Healthiest she's been, sustainable, joyful."
            },
            {
              heading: "THE PLAYFUL SPIRIT (GOD'S SENSE OF HUMOR)",
              content: "Proverbs 17:22: 'A joyful heart is good medicine'\n\nBrutal truth: Christianity became joyless somewhere along the way. Jesus wasn't boring.\n\nEvidence Jesus had humor:\n• Named Simon 'Rocky' (Peter) — the guy was impulsive, not rock-like\n• 'Remove log from your own eye before speck in brother's' (absurd visual)\n• Made 180 gallons of wine at wedding (party!)\n• Kids loved Him (boring people don't attract kids)\n\nPermission to:\n• Laugh in church\n• Make Christian friends fun, not just 'serious'\n• Enjoy creation (God made it enjoyable)\n• Be silly with your kids\n• Not take yourself so seriously\n\nSUCCESS — The Martinez small group:\n• Started with typical study (boring)\n• Added game night once a month (actually enjoyed each other)\n• Shared struggles while laughing (holy and human)\n• Quote: 'Best community I've ever had. We pray hard and laugh harder.'\n\nThe playful worship:\n• David danced (2 Samuel 6:14) — probably looked ridiculous\n• Psalms include sarcasm (Psalm 137 is dark)\n• Song of Songs is... pretty romantic\n• Permission: Worship can be joyful, creative, even messy"
            }
          ]
        },
        {
          id: "cc-phase7",
          title: "PHASE 7: RELATIONSHIPS (LOVING WELL)",
          subtitle: "Christ-Centered Connection",
          sections: [
            {
              heading: "WITH GOD (PRIMARY)",
              content: "Matthew 22:37-39: Love God, love others — greatest commandments\n\nWith God (Primary):\n• Daily conversation (prayer)\n• Listening (Scripture, silence)\n• Obedience (actually doing what He says)\n• Delight (enjoying Him, not just duty)\n\nPlayful spiritual disciplines:\n• Prayer walks (talk to God while moving)\n• Worship dancing (yes, really — see David in 2 Samuel 6:14)\n• Gratitude journaling with drawings\n• Scripture memory with music/rhythm"
            },
            {
              heading: "THE SABBATH RELATIONSHIP PRIORITY",
              content: "Matthew 22:37-39: Love God, love others — greatest commandments\n\nOne day weekly, prioritize:\n• God (worship, rest in Him)\n• Family (quality time, no agenda)\n• Community (real fellowship)\n• Self (rest, play, create)\n\nNot: Productivity, hustle, obligation\n\nThe Martinez Family Sabbath:\n• Saturday evening through Sunday evening\n• No work, minimal chores\n• Church, family meal, game time, naps, walks\n• Phone basket (everyone's phone in basket for day)\n• Kids initially complained, now protect it fiercely\n• Quote from 8-year-old: 'Sabbath is my favorite day. We're all together and happy.'"
            },
            {
              heading: "WITH SPOUSE (IF MARRIED)",
              content: "Ephesians 5: Mutual submission, sacrificial love\nNot: hierarchy where one dominates\nActually: Two becoming one, both serving\n\nSuccess: Weekly 'State of Us' dates — no phones, real talk, end with prayer together. Game changer.\nFailure: 'Prayer will fix our marriage' without counseling or changing behavior. Didn't work. Learned: Faith + action."
            },
            {
              heading: "WITH KIDS (IF PARENT)",
              content: "Deuteronomy 6:7: Teach them 'when you sit, walk, lie down, rise'\nNot: formal only\nActually: Life-integrated\n\nPlayful: Bedtime prayer + silliness, hide Bible verses around house like treasure hunt, make up worship songs together (bad ones count!)"
            },
            {
              heading: "WITH COMMUNITY (CHURCH/SMALL GROUP)",
              content: "Hebrews 10:24-25: Don't neglect gathering\nReal fellowship, not just attendance\n\nSuccess: Joined service team, built real friendships, felt purpose. 'Church isn't boring when you're part of it.'\nFailure: Church-hopped looking for 'perfect fit.' Never connected. Learned: Commitment > consumption."
            },
            {
              heading: "WITH NON-BELIEVERS",
              content: "Matthew 5:13-16: Salt and light\nNot: isolated in Christian bubble\nActually: In the world, not of it\nPlayful: Serve community, have fun with neighbors, be human not tract-distributer"
            },
            {
              heading: "THE FORGIVENESS PROTOCOL (THE HARD ONE)",
              content: "Matthew 6:14-15: Forgive others, God forgives you\nEphesians 4:32: Forgive as Christ forgave you\n\nBrutal truth: Forgiveness isn't feeling. It's decision.\n\nWhat forgiveness IS:\n• Releasing right to revenge\n• Choosing not to rehearse offense\n• Trusting God to handle justice\n• Freeing yourself from bitterness\n\nWhat forgiveness ISN'T:\n• Forgetting (that's biology, not choice)\n• Reconciliation (takes two people)\n• Trusting again immediately (trust is rebuilt)\n• Allowing continued harm (boundaries matter)\n\nThe process:\n1. Name the hurt — What happened? How did it affect you? Be honest with God about the pain.\n2. Feel the anger — God can handle your rage. Psalms are full of 'How long, O Lord?' Don't spiritually bypass.\n3. Choose to release — 'I forgive [name] for [specific offense]. I release them to You, God. I choose freedom over bitterness.'\n4. Repeat as needed — Forgiveness isn't one-time. Every time memory resurfaces, re-release."
            },
            {
              heading: "REAL EXAMPLES - Forgiveness",
              content: "SUCCESS — Janet, father's abuse:\n• Molested by father as child\n• Carried rage for 30 years\n• Chose forgiveness (not reconciliation — he was unsafe)\n• Her words: 'I didn't forgive for him. I forgave for me. Bitterness was killing me.'\n• Still has boundaries: No contact. That's wisdom, not unforgiveness.\n• The freedom: 'I think of him now and feel sad for him, not rage. That's progress.'\n\nFAILURE — Mark, quick 'forgiveness':\n• Friend betrayed him financially\n• Immediately said 'I forgive you' (spiritually correct response)\n• Never processed anger\n• Bitterness grew\n• Learned: Forgiveness is process. Feel it first, then release.\n• Do-over: Journaled anger, yelled in car, then genuinely forgave\n\nThe playful side of restoration:\nAfter forgiveness, if reconciling:\nThe Browns and The Taylors: Had massive fight at church event, almost split church. Both families chose forgiveness. Started monthly game nights (awkward at first). Year later: Closest friends. Quote: 'We joke about the war now. Best friendship came from worst conflict.'"
            }
          ]
        },
        {
          id: "cc-creative",
          title: "CREATIVE PURSUITS (IMAGE-BEARER CREATIVITY)",
          subtitle: "Made in the Image of the Creator",
          sections: [
            {
              heading: "GENESIS 1:27 — YOU ARE CREATIVE",
              content: "Genesis 1:27: Made in image of Creator = You're creative.\n\nBrutal truth: Creativity isn't just for artists. Everyone has it.\n\nWays to create:\n• Cook (make food beautiful)\n• Garden (partner with God's creation)\n• Build (woodwork, crafts, code)\n• Write (journal, poetry, stories)\n• Music (play, sing, compose)\n• Problem-solving (creativity in any field)\n\nPlayful permission:\n• Create badly (God doesn't grade it)\n• Create for joy (not just outcome)\n• Create as worship (offering to God)"
            },
            {
              heading: "REAL EXAMPLE — Mike, Accountant",
              content: "• Thought he wasn't creative\n• Started woodworking on weekends\n• Made crosses for friends, tables for family\n• 'I pray while I build. It's my worship time.'\n\nFailure first: Tried to monetize immediately, killed joy. Went back to creating for fun first.\n\nThe lesson: Create for God and joy first. Let the rest follow."
            }
          ]
        },
        {
          id: "cc-legacy",
          title: "LEGACY/MEANING (ETERNAL PERSPECTIVE)",
          subtitle: "What Outlasts You",
          sections: [
            {
              heading: "2 CORINTHIANS 4:18 — ETERNAL PERSPECTIVE",
              content: "2 Corinthians 4:18: 'We look not to what is seen but to what is unseen, eternal'\n\nWhat matters?\nNot: Building empire for yourself\nActually: What outlasts you\n• People you influenced\n• Kingdom work you did\n• Character you developed\n• Love you gave"
            },
            {
              heading: "PLAYFUL LEGACY BUILDING",
              content: "• Video messages for future grandkids\n• Annual family service project\n• Teaching someone your skill\n• Random acts of kindness challenges\n\nThe question to ask regularly:\n'What am I building that will outlast me?'\nNot for pride. For eternal perspective.\n\nThe brutal truth: Your 401k won't matter in eternity. The people you loved and the character you built will."
            }
          ]
        },
        {
          id: "cc-phase8",
          title: "PHASE 8: CAREER (WORK AS WORSHIP)",
          subtitle: "Real-Life Career Redemption Stories",
          sections: [
            {
              heading: "COLOSSIANS 3:23 — WORK AS WORSHIP",
              content: "'Whatever you do, work heartily, as for the Lord'\n\nReframe work:\n• Not: Just a paycheck\n• Actually: Calling, even if not 'ministry'\n• All work matters to God (plumber, teacher, CEO, artist)\n\nExcellence as witness:\n• Be best employee because of your faith, not just despite it\n• Integrity matters\n• 'Christians should be known for quality work' — Timothy Keller"
            },
            {
              heading: "FROM 'MINISTRY' TO MARKETPLACE — Pastor Mike",
              content: "• 15 years pastoral ministry\n• Burned out, underpaid, family suffering\n• Felt like failure leaving\n• Started landscape business\n• Discovery: 'I disciple my employees, serve clients with excellence, provide for family, less stressed. This IS ministry.'\n• Playful pivot: Business trucks have fish symbol, does honest work, prays with clients who ask\n• Quote: 'I thought leaving ministry was leaving God. Turns out, all work is ministry.'"
            },
            {
              heading: "THE 'SECULAR' JOB WITH SACRED PURPOSE — Teacher in Public School",
              content: "• Can't preach\n• Can model Christ\n• How: Excellence, patience, sees students as image-bearers, available for hurting kids\n• Results: Students ask why she's different, door opens to share faith naturally\n• Quote: 'I'm planting seeds. Some I'll never see grow. That's okay.'"
            },
            {
              heading: "THE CAREER CHANGE AT 50 — Corporate Executive to Nonprofit",
              content: "• Made $200k\n• Felt empty\n• Took $60k nonprofit job\n• Terrifying financially\n• Worth it: 'I wake up purposeful. Money mattered less than I thought.'\n• Playful adjustment: Downsized house, family time increased, stress decreased, 'Best decision we ever made'"
            },
            {
              heading: "THE SIDE HUSTLE FOR KINGDOM — Accountant by Day, Ministry by Night",
              content: "• CPA, good income\n• Wanted 'full-time ministry'\n• God said no\n• Reframe: Uses accounting income to fund mission trips, supports missionaries, provides free tax help to pastors\n• Quote: 'My secular job funds Kingdom work. That's my calling.'"
            },
            {
              heading: "FAILURE — Sarah the Martyr",
              content: "• Overworked at Christian nonprofit 'for the Kingdom'\n• Burnout, resentment, health issues\n• Learned: God doesn't want your sacrifice if it destroys you\n• Boundaries honor God too"
            }
          ]
        },
        {
          id: "cc-phase9",
          title: "PHASE 9: MONEY (FAITHFUL STEWARDSHIP)",
          subtitle: "Radical Generosity Stories and Debt Freedom",
          sections: [
            {
              heading: "THE WIDOW'S MITE (MODERN VERSION)",
              content: "Single Mom, Minimum Wage:\n• $24k/year\n• 3 kids\n• Gave $50/month to church (terrifying)\n• What happened: Not prosperity gospel results, but...\n• Community showed up when car broke\n• Kids got school supplies from unexpected sources\n• Never missed meal (though close sometimes)\n• Her quote: 'God didn't make me rich. But I've never been without. And my kids learned generosity.'"
            },
            {
              heading: "THE BUSINESS TITHE",
              content: "Small Business Owner:\n• Tithes personal income\n• Also tithes 10% of business profit to missions\n• Practical: Some years that's $0, some years $50k\n• Result: Business grew (not because of giving, but he worked excellent)\n• Quote: 'It's all God's anyway. I'm just managing it.'"
            },
            {
              heading: "FROM $200K DEBT TO FREEDOM — The Johnsons",
              content: "• Student loans, credit cards, car loans\n• $200k hole\n• Attacked it: budgeted ruthlessly, sold stuff, extra jobs\n• Gave minimally but something\n• 7 years later: Debt free\n• The playful part: Made it family mission, kids involved, celebrated each payoff, now teach Financial Peace at church\n• Quote: 'Best 7 years of our marriage. We fought together, not against each other.'"
            },
            {
              heading: "THE DO NOT DO THIS — Prosperity Gospel Fail",
              content: "• Heard 'sow seed, reap harvest'\n• Gave beyond means ('in faith')\n• $30k credit card debt 'for God'\n• No harvest came\n• Learned: God isn't manipulated. Giving from poverty to get rich isn't faith, it's gambling.\n• Recovery: Got real help, paid off debt, learned healthy stewardship"
            }
          ]
        },
        {
          id: "cc-phase10",
          title: "PHASE 10: LEARNING (GROWING IN WISDOM)",
          subtitle: "Learning God's Word and Stewarding Your Gifts",
          sections: [
            {
              heading: "THE 'EAT THIS BOOK' METHOD",
              content: "Not: Speed-read through Bible in a year\nTry: Meditate on small portions\n\nExample — Lisa, Psalm 23:\n• Spent entire month on Psalm 23\n• One verse per few days\n• Researched shepherd practices, Hebrew words, meditated\n• Result: 'Knows' that Psalm in her bones now\n• Quote: 'I used to read 3 chapters daily, remember nothing. Now I read less, experience more.'"
            },
            {
              heading: "THE MANUSCRIPT METHOD",
              content: "Hand-write Scripture. Slow, meditative.\n\nExample — Mike: Wrote entire book of Philippians. Took 3 months.\nResult: 'Every word matters. I see things I never saw reading quickly.'"
            },
            {
              heading: "THE MEMORIZATION WITH PLAY — Family Scripture Memory",
              content: "• Pick one verse monthly\n• Make it fun: actions, songs, drawings\n• The Williams kids: Know 50+ verses because parents made it game, not drudgery\n• Playful: Create hand motions, make up silly songs, draw pictures"
            },
            {
              heading: "THE THEOLOGY LEARNING PATH — From Surface to Depth",
              content: "• Start: Bible reading (know the story)\n• Add: Good commentary (understand context)\n• Add: Systematic theology (see big picture)\n• Add: Church history (see how others understood)\n• Add: Different perspectives (see nuance)\n\nExample — Tom's Journey:\n• Started: Read Bible cover to cover\n• Confused by contradictions (seemed like)\n• Added: Study Bible with notes\n• Added: 'Systematic Theology' by Wayne Grudem\n• Added: Church history books\n• Result: 'Everything makes sense now. Context is everything.'"
            },
            {
              heading: "THE PRACTICAL SKILL LEARNING (GOD'S GIFTS)",
              content: "God gave you abilities. Use them.\n\nMaria learned carpentry:\n• Built furniture\n• Taught skill to teens at church\n• 'Using hands to create, partnering with God's creativity'\n\nDavid learned counseling skills:\n• Took courses\n• Now helps in recovery ministry\n• 'God healed me. Now I help others.'\n\nSarah learned graphic design:\n• Free work for nonprofits\n• Designs worship slides for church\n• 'My art for His glory'"
            }
          ]
        },
        {
          id: "cc-phase11",
          title: "PHASE 11: HEALTH (TEMPLE CARE)",
          subtitle: "Real Transformation Stories",
          sections: [
            {
              heading: "FROM ADDICTION TO FREEDOM — John, Alcoholic",
              content: "• 15 years drunk\n• Christian whole time (secret drinking)\n• Hit bottom, went to recovery\n• Key: AA + church community + therapy + grace\n• 5 years sober: 'God didn't magically remove desire. He gave me tools, people, and strength daily.'\n• Playful redemption: Now sponsors others, hosts 'sober game nights' — proof you can have fun without alcohol"
            },
            {
              heading: "FROM OBESITY TO HEALTH (NOT THIN, HEALTH) — Rachel, 300 lbs",
              content: "• 'God loves me as I am' → true\n• 'So I don't need to change' → false\n• Health crisis: pre-diabetic, couldn't play with kids\n• Changed: Not crash diet, lifestyle (2 years)\n• Lost 80 lbs, gained energy\n• Quote: 'God loved me at 300. But He also wanted me to steward my body. I can do both now — love myself AND care for myself.'\n• Playful: Family dance parties, hiking adventures, actually enjoys moving now"
            },
            {
              heading: "FROM ANXIETY TO PEACE (NOT PERFECT, BETTER) — Michael, Panic Disorder",
              content: "• Christian, but terrified constantly\n• 'Just pray more' didn't work\n• Got therapy + medication\n• Still prays: 'God uses medicine. It's provision.'\n• Quote: 'I prayed for healing. God gave me a therapist and Lexapro. That WAS the healing.'\n• Playful coping: Anxiety memes with small group, makes light of what used to paralyze"
            },
            {
              heading: "FROM INSOMNIA TO REST — The Chen Family",
              content: "• All sleeping 5-6 hours\n• Thought it was normal\n• Made Sabbath rest priority\n• Fixed sleep schedule\n• Result: 'We're different people. Who knew sleep mattered?'\n• Playful: Family bedtime routine even for adults (yes, they read together sometimes)"
            }
          ]
        },
        {
          id: "cc-phase12",
          title: "PHASE 12: EXECUTION (DO THE THING)",
          subtitle: "Christ-Centered Motivation",
          sections: [
            {
              heading: "THE 'WHY' THAT SUSTAINS",
              content: "When motivation fades:\n\nNot sustainable:\n• 'I have to' (obligation)\n• 'I should' (guilt)\n• 'People expect me to' (external)\n\nSustainable:\n• 'God created me for purpose' (identity)\n• 'I'm stewarding gifts' (responsibility)\n• 'This serves others' (love)\n• 'This honors God' (worship)\n• 'This brings joy' (designed to)"
            },
            {
              heading: "THE RELUCTANT RUNNER — Tom",
              content: "• Tried running for fitness (failed)\n• Tried for weight loss (failed)\n• Reframe: Prayer runs\n• Talks to God while running\n• 'My time with Him'\n• 2 years later: Completed half marathon\n• Quote: 'I don't run to run. I run to talk to God. The fitness is bonus.'"
            },
            {
              heading: "THE PROCRASTINATING WRITER — Sarah, Aspiring Author",
              content: "• 'Wanted' to write\n• Never did\n• Changed: 'God gave me words. I'm stewarding the gift.'\n• 30 min daily, no excuses\n• 1 year later: Manuscript done\n• Playful: Rewarded herself with favorite coffee after each session"
            },
            {
              heading: "THE ACCOUNTABILITY PARTNERSHIP — Mike and David",
              content: "• Both struggled with consistency\n• Agreed: Text accountability daily\n• ✓ if did the thing, ✗ if didn't\n• No judgment, just data\n• Winner at end of month buys loser coffee\n• Low stakes, high effectiveness\n• Quote: 'I don't want to let him down. And I actually like the structure.'"
            }
          ]
        },
        {
          id: "cc-phase13",
          title: "PHASE 13: MAINTENANCE (LONG GAME)",
          subtitle: "The Rhythm of Sustainable Living",
          sections: [
            {
              heading: "THE RHYTHM OF SUSTAINABLE LIVING",
              content: "Daily:\n• Morning: Meet with God\n• Throughout: Work as worship\n• Evening: Gratitude, rest\n\nWeekly:\n• Sabbath (full day rest)\n• Community (small group/church)\n• Review and plan\n\nMonthly:\n• Extended time with God (half day)\n• Evaluate systems\n• Celebrate wins\n\nQuarterly:\n• Retreat (personal or with spouse)\n• Deep reflection\n• Course correct\n\nAnnually:\n• Full review\n• Vision for next year\n• Assess calling"
            },
            {
              heading: "REAL EXAMPLE — The Lewis Family",
              content: "Implemented rhythm 5 years ago:\n\nDaily: 10-min prayer, evening gratitude\nWeekly: Saturday Sabbath, Sunday church, Wednesday small group\nMonthly: First Saturday = extended family time + prayer\nQuarterly: Weekend away (parents only)\nAnnual: New Year's Day = family vision setting\n\nResults:\n• Marriage stronger\n• Kids thriving\n• Less stress\n• Clear direction\n• Quote: 'Life isn't perfect, but it has rhythm. That makes all the difference.'\n\nThe playful maintenance:\n• Sabbath is fun (not legalistic)\n• Reviews include celebration, not just critique\n• Systems serve, don't enslave"
            }
          ]
        },
        {
          id: "cc-phase14",
          title: "PHASE 14: THE FINAL PROTOCOL (ACTUALLY DO IT)",
          subtitle: "Christ-Centered Commitment",
          sections: [
            {
              heading: "THE REAL QUESTION",
              content: "'Lord, what do you want me to do?' (Acts 9:6)\n\nNot: 'What should I fix first?'\nActually: 'God, what are You saying?'"
            },
            {
              heading: "THE LISTENING PROTOCOL",
              content: "Week 1: Just listen\nDon't start anything yet.\n\nDaily:\n• 20 minutes silence\n• No agenda, just 'God, I'm listening'\n• Journal what comes up\n\nAsk:\n• 'What needs to change?'\n• 'What am I avoiding?'\n• 'Where are You calling me?'\n\nEnd of week:\n• Review what keeps coming up\n• That's probably your starting point\n\nReal examples:\n\nLisa's listening week:\n• Kept hearing: 'Forgive your mother'\n• Didn't want to\n• But it was clear\n• That became her first step\n• Result: Freed her from decades of bitterness\n\nTom's listening week:\n• Kept feeling: 'Less work, more family'\n• Scared (money)\n• But undeniable\n• First step: Left office by 5pm daily\n• Result: Sky didn't fall, family thrived"
            },
            {
              heading: "THE COMMITMENT (WITH GOD)",
              content: "Matthew 6:33: 'Seek first the kingdom of God... and all these things will be added'\n\nNot: 'I'll fix my life, then serve God'\nActually: 'I'll seek God, and He'll transform my life'\n\nThe prayer to start:\n'God,\nI'm a mess.\nI don't have this figured out.\nI've read this playbook, but I need You to do this.\nShow me where to start.\nGive me grace when I fail.\nGive me strength to keep going.\nMake me who You created me to be.\nNot perfect.\nBut faithful.\nNot immediately transformed.\nBut willing to change.\nUse my life for Your glory.\nAnd let me actually enjoy the journey.\nAmen.'"
            },
            {
              heading: "YOUR ACTUAL NEXT STEP",
              content: "1. Pray that prayer (for real)\n2. Listen for one week\n3. Pick one thing God highlights\n4. Start it (tiny, specific, today)\n5. Find one person for accountability\n6. Track for 30 days\n7. Celebrate progress (with joy!)\n8. Add next thing"
            },
            {
              heading: "THE FINAL BRUTAL TRUTH",
              content: "This playbook is long. You won't do it all at once.\nThat's okay.\nGod isn't grading you.\nHe's growing you.\nOne step at a time.\nOne day at a time.\nHis mercies are new every morning.\nSo are your opportunities to try again.\nStart small.\nStay faithful.\nEnjoy the journey.\nAnd remember:\nYou're not trying to earn God's love.\nYou already have it.\nYou're just learning to live like someone who's loved.\nThat's the whole point."
            }
          ]
        },
        {
          id: "cc-bonus",
          title: "BONUS: THE JOY PROTOCOL",
          subtitle: "Because Life Should Include Laughter",
          sections: [
            {
              heading: "WEEKLY JOY PRACTICES",
              content: "• Silly dance parties (yes, really)\n• Make up songs (bad ones count)\n• Play with kids/pets/friends (no agenda)\n• Create something (finger painting, snowmen, whatever)\n• Laugh until you cry (YouTube fails, friend jokes, whatever works)\n• Enjoy creation (stars, sunsets, flowers, mountains)"
            },
            {
              heading: "THE 'GOD'S SENSE OF HUMOR' LIST",
              content: "Evidence God has humor:\n• Created platypus (what even is that?)\n• Created penguin (fancy bird who can't fly)\n• Created giraffe (horse with ladder neck)\n• Made humans in His image (including humor)\n• Jesus' first miracle: 180 gallons of wine (PARTY)\n• Named Cephas 'rock' when he was impulsive\n• Your life (seriously, some of it's objectively funny)"
            },
            {
              heading: "PERMISSION GRANTED",
              content: "• Laugh at yourself\n• Enjoy good things without guilt\n• Play without purpose\n• Rest without earning it\n• Be human, not perfect\n• Fail and laugh about it later\n\nTHE END.\nNow go live it.\nWith joy.\nWith discipline.\nWith grace.\nWith Jesus.\nAnd for God's sake (literally):\nHave some fun along the way."
            }
          ]
        }
      ]
    },
    missingChapters: {
      title: "The Missing Chapters",
      subtitle: "What the Original Got Wrong, Skipped, or Was Too Scared to Say",
      color: "#D946EF",
      chapters: [
        {
          id: "chapter1",
          title: "CHAPTER 1: SUFFERING, LAMENT, AND THE THEOLOGY OF THE CROSS",
          subtitle: "The Part of Christianity That Prosperity Culture Cut Out",
          sections: [
            {
              heading: "THE BRUTAL THEOLOGICAL TRUTH",
              content: "Here is what the original playbook did not say:\n\n**God does not always fix the problem.**\n\nThat is not a failure of your faith. It is the center of your faith.\n\nThe cross is not an anomaly in God's story. It is the definitive statement of it. The Son of God, fully divine, experienced abandonment, physical agony, public shame, and death. He quoted Psalm 22 from the cross: 'My God, my God, why have you forsaken me?' That is not a performance. That is a real human experience of desolation."
            },
            {
              heading: "WHAT THE BIBLE ACTUALLY SAYS ABOUT SUFFERING",
              content: "PSALMS OF LAMENT — One Third of the Entire Book\n• Psalm 10: 'Why, O LORD, do you stand far away?'\n• Psalm 88: Ends without resolution. The darkness does not lift.\n• Psalm 22: 'I cry by day, but you do not answer'\n• Psalm 44: 'Awake! Why are you sleeping, O Lord?'\n\nPAUL'S THORN (2 Corinthians 12:7-9)\nPaul prayed three times for the thorn to be removed. God said no. God said: 'My grace is sufficient for you, for my power is made perfect in weakness.'\n\nJOB\nJob doesn't get an explanation. He gets a whirlwind and questions.\n\nHEBREWS 11\n'All these, though commended through their faith, did not receive what was promised.' They did not get healed. They did not prosper."
            },
            {
              heading: "THE THEOLOGY OF THE CROSS",
              content: "God is most fully known not in glory and triumph, but in suffering and the cross.\n\nImplications:\n1. God is present in suffering — not absent from it\n2. Suffering is not evidence of unfaithfulness\n3. The resurrection does not erase the cross — it comes through it\n4. Some suffering will not be resolved this side of eternity"
            },
            {
              heading: "THE LAMENT PROTOCOL",
              content: "Lament is not complaining. Lament is not lack of faith. Lament is the biblically modeled practice of bringing your full, honest pain to God and refusing to pretend otherwise.\n\nStep 1: Address God Directly\nDon't manage the distance. Start the conversation.\nEven if you're angry. Especially if you're angry.\n\nStep 2: Name the Pain Honestly\nDon't spiritualize it away. Don't rush to resolution.\n• What happened?\n• How does it actually feel?\n• What have you lost?\n• What are you afraid of?\nWrite it. Say it aloud. Ugly words are allowed. The Psalms contain rage, confusion, accusations toward God, and graphic descriptions of enemies. God is not fragile.\n\nStep 3: Remember Who God Is\nNot to dismiss the pain — but to anchor it. What do you know about God's character that does not change even when circumstances do?\n\nStep 4: Make Your Request\nState what you want. Specifically. Without manipulation, but without sanitizing.\n\nStep 5: Trust Without Resolution\nThe psalm doesn't always end with answers. It ends with trust in the absence of answers. This is not positive thinking. It is faith: 'I do not understand this. I am not okay with it. And I trust You anyway.'\n\nWhat Lament Is Not:\n• It is not a method for feeling better faster\n• It is not a step before 'real' prayer\n• It is not evidence of weak faith\n• It is not complaining or self-pity (self-pity collapses inward; lament reaches toward God)"
            },
            {
              heading: "THE PRACTICAL REALITY",
              content: "Some things you are carrying right now have no solution this side of eternity. A playbook that only offers solutions is not equipped for you.\n\nFor those things, the practice is not optimization. It is presence.\n\nWhat to do when there is nothing to do:\n1. Name what you're carrying without trying to fix it\n2. Find one person who can sit with you in it without rushing you to resolution\n3. Stay in Scripture — not to find answers, but to find companions (Job, David, Paul, Jesus all know this territory)\n4. Do not isolate from community, even when community is inadequate\n5. Let the Psalms of lament become your prayer when you have no words"
            }
          ]
        },
        {
          id: "chapter2",
          title: "CHAPTER 2: TRAUMA AND THE NERVOUS SYSTEM",
          subtitle: "When the Gap Between Knowing and Doing Is a Body Problem",
          sections: [
            {
              heading: "THE CORE INSIGHT THE PLAYBOOK MISSED",
              content: "The original playbook is built on a top-down model:\nMindset → Decision → Behavior → Habit → Identity\n\nThis model works for many people in many circumstances.\n\nIt does not work when the obstacle is not a mindset. When someone has survived abuse, prolonged threat, neglect, violence, or catastrophic loss — the body often stores that experience in a way that bypasses rational thinking entirely.\n\n**This is not laziness. It is not weak faith. It is the biology of survival.**"
            },
            {
              heading: "WHAT TRAUMA ACTUALLY IS",
              content: "Trauma is not simply 'bad things that happened.' Trauma is **what happens to the nervous system in response to overwhelming experience** that exceeds its capacity to process.\n\nTrauma is stored in the body, not just the mind. The experience is encoded somatically — in the nervous system, the muscles, the breath, the gut — not just as narrative memory.\n\nThis means:\n• Cognitive insight alone is often insufficient\n• Talk therapy without body-based work has limited effectiveness\n• The 'knowing-doing gap' is often a nervous system regulation problem\n• Standard habit formation can actually increase dysregulation"
            },
            {
              heading: "THE NERVOUS SYSTEM BASICS",
              content: "Your nervous system has two primary modes:\n\nREGULATED (Safe):\nYou can think clearly, make decisions, connect with people, engage with God, build habits, do creative work. This is where all the playbook advice works.\n\nDYSREGULATED (Threatened):\nYour system is running survival programs — fight, flight, freeze, or fawn. In this state, the prefrontal cortex (decision-making, long-term thinking) is effectively offline.\n\nTHE PROBLEM:\nTrauma causes a system that gets stuck in dysregulation — sometimes chronically, sometimes in response to specific triggers — even when there is no present threat."
            },
            {
              heading: "HOW TO KNOW IF THIS APPLIES TO YOU",
              content: "Do you:\n• Consistently fail to do things you genuinely want to do, across multiple life domains, over extended time?\n• Feel a physical sensation (tightness, shutdown, agitation, dissociation) that precedes the 'giving up' moment?\n• See a gap between your intellectual capacity and your ability to function in daily life?\n• Have a history of sustained threat, abuse, neglect, violence, or catastrophic loss?\n• Frequently feel 'not safe' in situations that are objectively safe?\n• See patterns in your relationships repeat in ways you can see but cannot seem to change?\n\nIf several yes — this chapter is your entry point, not Phase 0."
            },
            {
              heading: "THE PROTOCOL: STEP 1 - NAME THE RIGHT PROBLEM",
              content: "Is this gap a knowledge problem, a motivation problem, a values problem — or a nervous system regulation problem?\n\nThese require different interventions. Willpower training for a nervous system regulation problem makes it worse, not better. It adds shame to dysregulation."
            },
            {
              heading: "THE PROTOCOL: STEP 2 - BUILD A REGULATION PRACTICE",
              content: "Evidence-based options:\n\nDIAPHRAGMATIC BREATHING:\nLong exhale relative to inhale (exhale longer than inhale activates parasympathetic) — 5 minutes, twice daily.\n\nCOLD WATER:\nBrief (30-second) cold water on face or wrists. Triggers the dive reflex, rapidly slows heart rate.\n\nSLOW MOVEMENT:\nYoga, tai chi, slow walking — not for fitness, for proprioceptive grounding.\n\nSAFE SOCIAL CONTACT:\nCo-regulation with a calm, safe person. The nervous system learns safety partly through other nervous systems.\n\nBILATERAL STIMULATION:\nWalking, tapping alternating knees, alternating pressure — used in EMDR for a reason."
            },
            {
              heading: "THE PROTOCOL: STEP 3 - SEEK RIGHT PROFESSIONAL HELP",
              content: "Evidence for trauma treatment:\n\nEMDR: Strong (multiple RCTs) — Reprocesses traumatic memories via bilateral stimulation\nSomatic Experiencing (SE): Preliminary evidence, growing — Body-based trauma renegotiation; avoids re-traumatizing\nInternal Family Systems (IFS): Growing evidence — Works with trauma-based 'parts' of the self\nDBT: Strong for emotional dysregulation — Skills for tolerating distress\nStandard CBT alone: Moderate for mild-moderate trauma; less effective for complex/developmental trauma\n'Just prayer/more faith': No evidence for trauma; potential harm — Not a substitute for trauma treatment\n\nWhen seeking a therapist for trauma, ask specifically:\n• 'Are you trained in trauma-informed approaches? Which ones?'\n• 'Have you done your own trauma work?' (matters more than most people realize)\n• 'How do you work with the body in sessions?'\n\nIf a therapist's entire approach is talking about the past with no attention to the physical/somatic experience, that may be insufficient for complex trauma."
            },
            {
              heading: "THE PROTOCOL: STEP 4 - RETURN TO THE PLAYBOOK WHEN REGULATED",
              content: "Once you have a regulation practice and are working with appropriate professional support, the original playbook's systems become usable. Not before. Start there — and do not shame yourself for the time it takes."
            },
            {
              heading: "THE CHRIST-CENTERED DIMENSION (CHAPTER 2)",
              content: "Jesus' ministry was disproportionately with people the system had labeled broken, unclean, dangerous, or too far gone. His first recorded sermon (Luke 4:18) was: 'He has sent me to proclaim liberty to the captives and recovering of sight to the blind, to set at liberty those who are oppressed.'\n\nTrauma survivors are not failures. They are people carrying weight that was put on them, often by others, often in childhood. The gospel has specific, particular, concrete things to say to them — starting with: you are seen, you are not responsible for what was done to you, and there is a way through."
            }
          ]
        },
        {
          id: "chapter3",
          title: "CHAPTER 3: GRIEF",
          subtitle: "Not a Crisis. Not a System. A Season.",
          sections: [
            {
              heading: "WHAT THE ORIGINAL PLAYBOOK MISSED",
              content: "The original playbook treats emotional difficulty primarily as a mental health issue to address (therapy, CBT, medication if needed) or as avoidance behavior to confront.\n\nGrief is neither of these.\n\n**Grief is the normal, healthy, painful human response to loss.** It requires no diagnosis. It follows no system. It cannot be optimized or expedited. It is a season to be inhabited, not a problem to be solved."
            },
            {
              heading: "WHAT GRIEF ACTUALLY LOOKS LIKE",
              content: "The five stages model (Kübler-Ross, 1969) is widely misapplied. Current grief research confirms:\n\n• Grief is non-linear, highly individual, and does not follow a predictable sequence\n• Some people experience certain 'stages' not at all\n• Grief can be delayed by months or years, then arrive fully formed\n• 'Complicated grief' or prolonged grief disorder is real but rare\n• There is no correct timeline for grief\n\nWhat grief actually is:\n• A physical experience (fatigue, aching, hollow feeling, changed appetite)\n• A cognitive disruption (difficulty concentrating, forgetfulness, confusion)\n• An identity disruption (loss of role, of the future you imagined)\n• Episodic, not constant — grief often comes in waves\n• Not a disease — though it can trigger depression"
            },
            {
              heading: "WHAT GRIEF REQUIRES - From You",
              content: "Permission:\nMost people do not give themselves full permission to grieve. Especially men. Especially Christians who feel they should 'trust God.'\n\nTime:\nNot weeks. Months, sometimes years. Loss of a spouse or child can reshape a life permanently. That is not pathology.\n\nHonest Witness:\nSomeone who can hear the real grief without rushing to comfort it away. 'It'll be okay' said too early is closure of the conversation.\n\nNon-Productivity:\nSome seasons of grief require doing less, not more. You cannot grieve properly while maintaining full optimization protocols."
            },
            {
              heading: "WHAT GRIEF REQUIRES - From Others",
              content: "• Presence, not answers\n• Tolerance of the bereaved person's timeline\n• Practical care without advice\n• Permission to still mention the name of who or what was lost"
            },
            {
              heading: "THE PROTOCOL - Phase 1: Name the Loss",
              content: "Be specific. Not just 'I lost my dad' — but also: what exactly did you lose?\n\n• The Saturday morning calls\n• The person who knew your whole story\n• The future where he saw your kids grow up\n• The apology he never gave\n• The approval you still needed\n\nGrief is rarely about the person alone. It is about the specific, layered reality of what is now missing."
            },
            {
              heading: "THE PROTOCOL - Phase 2: Create Space to Feel It",
              content: "Create a specific, protected time — not 'whenever it comes up' — to actually be with the grief.\n\n• Walk\n• Sit with a photograph\n• Listen to music associated with them\n• Write\n• Cry if it comes\n• Sit in it if it doesn't\n\nDon't check your phone. Don't analyze. Just be with it."
            },
            {
              heading: "THE PROTOCOL - Phase 3: Find a Witness",
              content: "Name one person who can hear your grief without trying to fix it.\n\nTell them explicitly: 'I don't need you to make it better. I just need you to hear it.'\n\nThis is one of the most healing things available to a grieving person — and one of the most rarely offered."
            },
            {
              heading: "THE PROTOCOL - Phase 4: Let the Timeline Be What It Is",
              content: "Check in honestly at 3-month intervals:\n\n'Am I moving through this, or am I stuck in a particular place?'\n\nIf the same scene, the same feelings, the same questions are completely immovable after 12-18 months and significantly interfering with daily life — that may be complicated grief, and a grief-trained therapist can help.\n\nBut 'I still feel sad when I think about them two years later' is not pathology. It is love."
            },
            {
              heading: "THE GRIEF AUDIT",
              content: "This is not a clinical tool. It is a permission structure.\n\nHave you fully grieved:\n• The death of someone you loved?\n• A marriage or relationship that ended?\n• A version of your life you expected but didn't get?\n• A child's struggle you cannot fix?\n• A career or calling that didn't work?\n• Your own health before a diagnosis?\n• An era of life (childhood, youth, family structure) that is gone?\n• Your faith before a crisis of belief?\n• A parent's love you never received?\n\nIf you skipped any of these — moved on, stayed busy, 'trusted God,' stayed logical — that grief is likely still present. It does not go away because you didn't acknowledge it. It goes underground, and it surfaces as anger, numbness, overwork, chronic low-level depression, difficulty connecting, or fear of attachment."
            },
            {
              heading: "THE CHRIST-CENTERED DIMENSION (CHAPTER 3)",
              content: "'Jesus wept.' — John 11:35\n\nLazarus would be resurrected in minutes. Jesus knew this. He wept anyway. He did not minimize the grief because he knew the outcome. He entered it.\n\nThis is permission for every Christian who has been told that grieving proves they 'don't really believe.' Jesus believed in the resurrection more certainly than anyone. He still wept.\n\nThe Psalms of lament exist for this. Lamentations exists for this. The book of Job exists for this. Ecclesiastes sits with the brutal reality of mortality and loss. This is not weak faith literature. It is the Bible.\n\n'Blessed are those who mourn, for they shall be comforted.' — Matthew 5:4\n\nNot: 'Blessed are those who push through.' Not 'Blessed are those who trust God so completely they don't really mourn.' Blessed are those who mourn. Fully, honestly, without pretense."
            }
          ]
        },
        {
          id: "chapter4",
          title: "CHAPTER 4: NEURODIVERGENCE",
          subtitle: "When Your Brain Doesn't Run on the Standard Operating System",
          sections: [
            {
              heading: "THE PROBLEM WITH THE ORIGINAL PLAYBOOK",
              content: "The entire framework — build one habit at a time, 30-day streaks, same bedtime every night, time blocking, linear progression — is built on neurotypical assumptions.\n\nApproximately 19% of Americans identify as neurodivergent. ADHD affects 7-8% of the population. If the original playbook's systems have consistently failed you despite genuine effort — this may be why.\n\nYou're not broken. You're using the wrong tool."
            },
            {
              heading: "ADHD-SPECIFIC: HOW YOUR BRAIN ACTUALLY WORKS",
              content: "ADHD is not a deficit of attention. It is a **dysregulation of attention** combined with a neurological difference in how the dopaminergic reward system functions.\n\nThe ADHD nervous system is primarily **interest-based**, not **importance-based.**\n\nADHD brains typically engage when something is:\n• Novel (new, interesting, stimulating)\n• Urgent (real deadline, real consequences now)\n• Challenging (stretch beyond current ability)\n• Personally meaningful (connected to values, relationships, identity)\n\nWhen none of these are present, the ADHD brain experiences a genuine neurological obstacle to initiation — not laziness. The executive function systems (working memory, inhibition, task initiation, time perception) run differently."
            },
            {
              heading: "WHAT ACTUALLY WORKS FOR ADHD",
              content: "1. External accountability structures\nBody doubling, accountability partners, public commitments. The ADHD brain responds to social presence as regulatory input.\n\n2. Visible tracking\nPhysical objects (paper, whiteboards). Out of sight is genuinely out of mind.\n\n3. Reward immediately\nThe brain's dopamine response to distant rewards is weaker. Immediate small rewards after task completion are more effective.\n\n4. Environmental engineering over internal discipline\nADHD brains require the environment to do the work willpower cannot.\n\n5. Medication if appropriate\nADHD medication is among the most evidence-supported psychiatric interventions available.\n\n6. Compassionate tracking, not punitive tracking\nPercentage-based, not streak-based."
            },
            {
              heading: "ADHD PLAYBOOK ADJUSTMENTS",
              content: "'Same time every day, build routine' → ADHD Reality: Routine is often deeply aversive to ADHD brains; novelty is necessary fuel. Adjusted: Create systems with structure but novelty within them. Rotate your workout. Change your study location. Same time, different content.\n\n'30-day streak, restart from zero' → ADHD Reality: Streak failure creates shame spiral, which causes full abandonment (common ADHD pattern). Adjusted: Track completion percentage. '8 of 10 days last week' is meaningful. 'Missed day 15, back to zero' is a discouragement machine.\n\n'Time blocking for deep work' → ADHD Reality: ADHD time blindness makes time blocks extremely difficult. Adjusted: Body doubling, external timers, visible countdowns. Use tools that make time visible, not just scheduled.\n\n'Remove all distractions' → ADHD Reality: Sometimes background stimulation is necessary to maintain arousal/focus. Adjusted: Find your optimal stimulation level. Some ADHD people need more sensory input, not less.\n\n'Motivation is garbage, systems are everything' → ADHD Reality: Partially true, but interest/stimulation is also biological fuel. Adjusted: Gamify where possible. Interest matters neurologically, not just psychologically.\n\n'One habit, then add another' → ADHD Reality: Hyperfocus can make multiple simultaneous changes feel possible — then crash. Adjusted: During hyperfocus phases, do the work but don't commit to unsustainable systems. Build systems for bad brain days, not good ones."
            },
            {
              heading: "FOR THE CHRISTIAN WITH NEURODIVERGENCE",
              content: "The church has often, unintentionally or deliberately, communicated that ADHD-like behavior (distraction in church, forgetfulness, impulsivity, difficulty with devotional consistency) reflects spiritual immaturity. This needs to be named and rejected.\n\nThe same Spirit who makes a contemplative monk's long silence possible works in a brain wired for novelty and urgency. The forms of faithfulness may look different. The faithfulness is not less real.\n\nMoses had what looks like significant anxiety and self-doubt. Peter was impulsive to the point of chaos. John and James had enough unregulated emotion to be called 'Sons of Thunder.' Thomas needed explicit sensory verification. The disciples as a group had difficulty concentrating during Jesus' prayer in Gethsemane.\n\nGod has always worked through brains that don't run the standard program."
            }
          ]
        },
        {
          id: "chapter5",
          title: "CHAPTER 5: THE DARK NIGHT OF THE SOUL",
          subtitle: "When God Goes Quiet and It Isn't Your Fault",
          sections: [
            {
              heading: "WHAT IT IS",
              content: "The dark night of the soul is a phrase from 16th-century Spanish mystic John of the Cross. It describes a season — sometimes brief, sometimes lasting years — in which a sincere, faithful Christian experiences:\n\n• The felt absence of God despite continued seeking\n• Scripture that feels dry and distant\n• Prayer that feels like talking to a wall\n• Spiritual practices that produce nothing\n• Loss of the emotional certainty of faith\n• Sometimes, serious doubt about the faith itself\n\nThis is not the same as depression (though they can coexist). It is not the same as spiritual failure. It is not caused by sin you've missed or faith you lack."
            },
            {
              heading: "WHAT IT IS NOT",
              content: "It is not the same as spiritual lukewarmness.\nThe person in a dark night typically cares *more* about God than the average comfortable churchgoer. The darkness comes precisely because they want the felt presence of God and it is not there.\n\nIt is not proof you're not saved.\nThomas à Kempis, John of the Cross, Teresa of Ávila, John Wesley, C.S. Lewis, and Mother Teresa — whose private letters revealed decades of spiritual darkness — all experienced this.\n\nIt is not something to fix immediately.\nThe attempt to fix it by trying harder, doing more, manufacturing feeling — usually deepens it."
            },
            {
              heading: "WHY GOD ALLOWS IT",
              content: "The Christian mystical tradition offers the most coherent explanation:\n\nThe dark night functions as a purification of attachment to felt experience and a deepening of naked faith. When God removes the consolations of faith — the emotional warmth, the sense of presence, the joy in worship — what remains is belief that is no longer dependent on feeling. This is considered a more mature form of faith, not a lesser one.\n\nJohn of the Cross: 'In order to arrive at what you do not know, you must go by a way in which you do not know.'\n\nThe parallel in the Psalms: Psalm 88, the only unresolved lament, ends in darkness. It is in the canon. God left it there. Darkness that remains unresolved is not a mistake in the Bible. It is an honest witness."
            },
            {
              heading: "WHAT TO DO IN IT",
              content: "Do not stop the practices even when they feel empty.\nThis is the most counterintuitive advice and the most consistently given by those who have navigated it. Pray when it feels hollow. Read Scripture when it feels dry. Attend community when you don't feel God there. You are training the will, not the feeling. The feeling is not the point.\n\nReduce, don't eliminate.\nThe dark night often calls for simplified, stripped-down practice — not an elaborate new spiritual program. Less is more. Shorter, simpler, more honest.\n\nSpeak it to someone.\nThe shame of admitting 'I've been doing this for years and I don't feel God at all' is enormous in the church. It shouldn't be. Find a spiritual director, a pastor with contemplative training, or a mature believer who won't immediately try to fix it.\n\nWait.\nThis is not inaction. It is a specific, active posture of trust without feeling. 'I will wait for the Lord' (Psalm 27:14) is a practice, not a passive resignation.\n\nDistinguish dark night from clinical depression.\nDepression typically affects sleep, appetite, physical function, motivation broadly, and capacity for pleasure in non-spiritual areas. Dark night is more specifically spiritual. If there is significant functional impairment across life domains, see a professional regardless of whether you believe it is 'spiritual' or 'psychological' — both can be true simultaneously."
            }
          ]
        },
        {
          id: "chapter6",
          title: "CHAPTER 6: SPIRITUAL ABUSE",
          subtitle: "When the Church Is the Source of the Wound",
          sections: [
            {
              heading: "THE REALITY",
              content: "The original playbook recommends small groups, accountability partners, and church community repeatedly. This advice is sound — in a healthy church. It is dangerous advice without discernment tools, because spiritual abuse is common, real, and deeply damaging.\n\nSpiritual abuse occurs when spiritual authority is used to manipulate, control, shame, or harm people. It ranges from subtle to severe and is frequently rationalized with Scripture."
            },
            {
              heading: "THE WARNING SIGNS — In Leadership",
              content: "These are not cultural preferences or matters of style. These are indicators of spiritually unsafe environments.\n\n• Questions are treated as threats or signs of spiritual weakness\n• Criticism of leadership is equated with criticism of God\n• Leaders demand loyalty to themselves, not to Christ\n• 'God told me' is used to end discussion rather than invite discernment\n• Leaders' personal lives are off-limits but congregants' are subject to scrutiny\n• Accountability flows only downward, never upward\n• Financial decisions are not transparent\n• Dissent results in public shaming, exclusion, or pressure campaigns"
            },
            {
              heading: "THE WARNING SIGNS — In Community and Doctrine",
              content: "In community:\n• Belonging is conditional on compliance\n• Members are discouraged from outside friendships and relationships\n• Leaving the church is treated as equivalent to leaving God\n• Shame is the primary motivational tool\n• There is a strong in-group/out-group identity around the specific church or leader\n• Personal revelation or prophecy from leadership is given authority equal to or above Scripture\n\nIn doctrine:\n• Suffering is consistently attributed to personal sin or lack of faith\n• Prosperity is framed as evidence of God's favor and poverty as its absence\n• Submission is preached to those under authority but not to those in authority\n• Forgiveness is weaponized to silence legitimate grievance\n• The specific church or denomination is treated as uniquely correct or essential to salvation"
            },
            {
              heading: "WHAT TO DO",
              content: "Trust your body's signal. If a persistent sense of dread, shame, or constriction characterizes your experience in a church community — that is information. Pay attention to it.\n\nName what you're experiencing. Spiritual abuse often operates through confusion — the victim is gaslit into believing their perception is the problem. Naming it, even privately, is the first act of clarity.\n\nSeek outside perspective. Someone not embedded in the community who can hear your experience without the community's framing.\n\nKnow that leaving is sometimes necessary and is never abandoning God. Leaving a harmful church is not the same as leaving Christianity. A God who wills your harm to preserve an institution is not the God of the Bible.\n\nRecovery takes time and specific support. Spiritual abuse trauma has specific characteristics — including distorted theology, difficulty trusting God, difficulty with spiritual practices, and grief over the community lost. Therapists trained in spiritual abuse recovery exist. Religious trauma support communities exist. Use them.\n\nThe gospel is not the institution. Jesus was killed by the religious institution of his day. He was not confused about the difference between the institution and his Father."
            }
          ]
        },
        {
          id: "chapter7",
          title: "CHAPTER 7: PORNOGRAPHY AND SEXUAL FORMATION",
          subtitle: "The Unnamed Addiction",
          sections: [
            {
              heading: "WHY THIS WASN'T IN THE ORIGINAL PLAYBOOK",
              content: "The original playbook names alcohol, drugs, and caffeine by name. It does not name pornography.\n\nThe reality: pornography use among Christians is not meaningfully different from the general population in prevalence. Multiple Barna Group studies put regular pornography use among Christian men at 41-68% (depending on age and definition). Among women, use is increasing and underreported due to shame.\n\nThe absence of this in both versions of the original playbook is an omission, not a protection."
            },
            {
              heading: "WHAT IT ACTUALLY IS",
              content: "Pornography functions as a behavioral addiction via the same dopaminergic variable-reward mechanism as gambling and social media — but with the added power of sexual arousal, one of the brain's most intense reward pathways. This is not a moral characterization. It is neuroscience.\n\nThis means:\n• Willpower alone is generally insufficient to break the pattern\n• Shame often makes the cycle worse, not better\n• Structural/environmental change is necessary, not just spiritual resolve\n• The behavior is serving a function (stress relief, loneliness, avoidance, intimacy substitute) that needs to be addressed, not just stopped"
            },
            {
              heading: "THE PROTOCOL — Honest Assessment and Environmental Engineering",
              content: "Step 1: Honest Assessment\nAnswer privately:\n• How often? (Daily, weekly, occasionally)\n• What triggers it? (Stress, loneliness, boredom, specific times, specific emotional states)\n• Have you tried to stop more than twice and failed? (This is the addiction threshold indicator)\n• Is it affecting your relationship, self-perception, or spiritual life?\n\nStep 2: Environmental Engineering First\nAs with all behavioral addictions, willpower alone has a poor success rate. Environment is primary:\n• Filters and accountability software (Covenant Eyes, Circle, etc.) — not as punishment but as friction reduction\n• Remove devices from bedroom\n• Identify highest-risk times and plan alternative behaviors specifically for those times\n• Eliminate the pathway, not just the outcome"
            },
            {
              heading: "THE PROTOCOL — Address the Function and Build Community",
              content: "Step 3: Address the Function\nWhat is pornography doing for you? It is almost always:\n• Stress relief / emotional regulation\n• Loneliness / intimacy substitute\n• Boredom / dopamine seeking\n• Avoidance of anxiety or difficult emotional states\n• Compulsion that started as curiosity and became habit\n\nThe behavior will not stop permanently until these underlying needs have a healthier pathway. This is where therapy is most useful.\n\nStep 4: Community, Not Just Accountability\nRecovery happens in community, not in isolation. The shame model (private struggle, private confession, private willpower) has low effectiveness. Groups like SAA (Sex Addicts Anonymous) or faith-based equivalents exist. Vulnerability with a specific, trusted person — not generalized 'accountability' — is significantly more effective.\n\nStep 5: The Theological Frame That Actually Helps\nNot: 'You are disgusting and this disqualifies you.'\nNot: 'God loves you just as you are so it's not a big deal.'\nActually: 'You were made for real intimacy, and this is a broken substitute that will never satisfy. The brokenness doesn't disqualify you. It is the occasion for grace. But grace doesn't leave you here — it calls you toward what you were made for.'"
            }
          ]
        },
        {
          id: "chapter8",
          title: "CHAPTER 8: MALE FRIENDSHIP AND THE LONELINESS CRISIS",
          subtitle: "The Epidemic Nobody Talks About Because Talking About It Feels Unmasculine",
          sections: [
            {
              heading: "THE DATA",
              content: "US Surgeon General Vivek Murthy declared loneliness a public health crisis in 2023.\n• More than 50% of US adults report loneliness at measurable levels\n• 1 in 6 Americans report feeling lonely or isolated most of the time\n• More people struggle with loneliness than have diabetes in the United States\n• The health effects of loneliness are equivalent to smoking 15 cigarettes per day\n\nPew Research (2025) found that men, while not necessarily lonelier than women, are significantly less likely to seek social support, maintain close friendships, or use emotional support networks when struggling. Men's friendship networks shrink sharply after their mid-20s and continue declining through middle age."
            },
            {
              heading: "WHY MALE FRIENDSHIP DIES",
              content: "Most men can identify the last time they made a real friend. For most, it was in school or early 20s. The mechanism of friendship — proximity, repetition, unplanned interaction — stops being automatic in adulthood. Everything after that requires intention, and most men have not developed that intention.\n\nAdditional barriers:\n• Cultural scripts around masculinity define emotional vulnerability and need as weakness\n• Competition — professional and social — makes depth with peers threatening\n• Coupledom — married men often outsource emotional needs entirely to spouse, leaving no practice or space for male friendship\n• Geographic mobility — career moves break friendship networks repeatedly\n• Busyness as status — admitting you have time for friends conflicts with the narrative of importance\n• Church structures that prioritize family units over same-gender friendship"
            },
            {
              heading: "WHY IT MATTERS FOR FAITH",
              content: "Jonathan and David (1 Samuel 18:1-4) — a friendship explicitly described as soul-deep, where Jonathan loved David 'as his own soul.' Not a subordinate relationship. Not a mentorship. A peer bond of mutual commitment and vulnerability.\n\nProverbs 17:17: 'A friend loves at all times, and a brother is born for a time of adversity.'\n\nProverbs 27:17: 'As iron sharpens iron, so one person sharpens another.'\n\nThis is not about accountability groups. It is about friendship — real, unagenda'd, mutual, enjoyable friendship — as a distinct biblical category that the church has collapsed into either discipleship programs or small groups, which are not the same thing."
            },
            {
              heading: "THE PROTOCOL FOR BUILDING MALE FRIENDSHIP IN ADULTHOOD",
              content: "Phase 1: Identify the Candidates (2-3 people)\nNot who you should be friends with. Who do you actually enjoy? Start with existing acquaintances — church, work, neighborhood — not strangers.\n\nPhase 2: Initiate Repeatedly\nThe research is consistent: the person who initiates more becomes more connected. Most men wait for others to initiate and conclude nobody wants to be close. Most men are doing this simultaneously.\nRule: You initiate. They may not reciprocate immediately. Initiate again. Three initiations without response is a signal. One or two is normal friction.\nConcrete: 'Want to grab coffee this week?' is sufficient. You do not need a reason.\n\nPhase 3: Create Regularity\nFriendship is built through repeated, low-stakes shared experience. The content matters less than the regularity. A recurring activity (same basketball game, same coffee spot, same running route). The point is not the activity. The point is showing up for each other predictably.\n\nPhase 4: Go Deeper, Intentionally\nMost men's friendships plateau at activity-level connection. Depth requires one person to go first. How: Ask a real question. 'How are things actually going?' and mean it. Share something real about your own experience. Wait. Most men, if given actual permission and a safe receiver, will talk. This happens incrementally, over time, through repeated small moments of honesty.\n\nPhase 5: Protect It\nMale friendship in adulthood requires defending it against the things that kill it — overwork, family schedule overflow, the assumption that it can always be rescheduled. Schedule it. Show up. Treat it as a real commitment."
            }
          ]
        },
        {
          id: "chapter9",
          title: "CHAPTER 9: SINGLENESS — A COMPLETE LIFE, NOT A WAITING ROOM",
          subtitle: "The Theological Problem the Church Created",
          sections: [
            {
              heading: "THE THEOLOGICAL PROBLEM IN THE CHURCH",
              content: "The original playbook's relationship section and the Christ-centered version's family sections assume, throughout, that the reader is in a romantic relationship or working toward one. This is not malice. It reflects a church culture in which marriage is the implicit norm and singleness is the implicit deficiency. It is theologically inaccurate and pastorally harmful."
            },
            {
              heading: "WHAT THE BIBLE ACTUALLY SAYS",
              content: "Paul: 'I wish that all were as I myself am [single]. But each has his own gift from God.' (1 Corinthians 7:7)\nPaul explicitly calls singleness a gift — not a lesser state, not a temporary condition, but a charisma — a Spirit-given gift with its own distinct possibilities.\n\nJesus: Was single. The one fully human, fully flourishing life ever lived was single. If singleness were inherently incomplete, Jesus would have been incomplete. He was not.\n\n1 Corinthians 7:32-35: Paul argues that the unmarried person has greater capacity for undivided devotion to God than the married person. This is not consolation. It is a genuine claim about a distinct spiritual advantage.\n\nThe New Testament does not treat marriage as the goal of human flourishing or singleness as its failure. That is a cultural imposition, not a biblical one."
            },
            {
              heading: "THE PRACTICAL REALITY OF SINGLENESS (HONEST VERSION)",
              content: "Real challenges of adult singleness:\n• Loneliness that is structural, not just emotional — the absence of a primary human witness to your life\n• Social structures (church, holidays, housing costs, social events) built around couples and families\n• The grief of wanting marriage and not having it (for those who desire it)\n• Absence of regular physical touch (an underacknowledged human need)\n• Decision-making without a partner\n• Vulnerability in illness or crisis without an immediate household member\n• Pressure from family, church, and culture to explain yourself\n\nAlso real:\n• Deeper friendship investment is possible when not divided by marriage demands\n• Greater vocational availability and mobility\n• Freedom in spiritual practice (schedule, retreat, financial generosity, radical availability to need)\n• Time to develop self-knowledge without the negotiation of partnership\n• Some experiences of God accessible specifically in solitude and undivided devotion"
            },
            {
              heading: "THE PROTOCOL FOR THRIVING AS A SINGLE PERSON",
              content: "1. Build your household deliberately.\nThe nuclear family is not the only unit of human belonging. Create a household — not necessarily under one roof — of people who are your people. Who shows up when you're sick? Who do you call at 11pm? Who is your emergency contact? This must be built with intention.\n\n2. Don't outsource your primary community to your dating life.\nIf all of your relational investment goes into finding a partner, you will be isolated if the search takes years. Build the life now. The partner, if they come, enters a full life.\n\n3. Address the grief honestly.\nIf you desire marriage and don't have it, that is a real loss. Grieve it. Don't bypass it with theological cheerfulness. Grief and hope are not mutually exclusive.\n\n4. Find a church that sees you.\nNot every church treats single adults as unchosen auxiliary members. Find one that doesn't. Your full participation — not as a support role — but as a full adult member of the body with your own gifts, calling, and voice.\n\n5. The theology of enough.\nYou are not incomplete. Your life is not on hold. This is your life. You are not waiting to begin. You have already begun. Act accordingly."
            }
          ]
        },
        {
          id: "chapter10",
          title: "CHAPTER 10: SEASONS OF LIFE",
          subtitle: "The Playbook Isn't One Size",
          sections: [
            {
              heading: "THE ASSUMPTION THE ORIGINAL MADE",
              content: "The original playbook was written for, and mostly works for, a single adult in their mid-20s to 40s with adequate sleep available, control over their schedule, no dependent caregiving responsibilities, a functioning body, relative financial stability, and full cognitive resources available.\n\nMost adults are not this person at any given moment in their lives."
            },
            {
              heading: "YOUNG PARENTS (0-5 YEARS)",
              content: "The reality: Chronic sleep deprivation is clinically equivalent to being legally drunk. Every productivity and health and spiritual formation protocol in the original playbook assumes a functional sleep baseline. Parents of infants and toddlers often do not have this.\n\nWhat this means: The standard playbook is largely contraindicated for parents in the 0-3 year period. Not wrong, just inaccessible. Applying it aggressively during this season produces shame, not results.\n\nWhat actually works:\n• Radically reduced expectations are not failure. They are sanity.\n• Sleep when you can. This is not laziness. It is triage.\n• Spiritual formation in this season often looks like praying in fragments, finding God in the daily chaos, and receiving parenting itself as the primary spiritual practice\n• Protect one habit. Not five. One.\n• Community is more important than productivity — support networks, not self-optimization\n• The phase ends. The people stay who showed up during it.\n\nThe theological reframe: Parenting young children is a season of poured out living — disproportionately given, not evenly exchanged. Jesus' model of self-emptying service (Philippians 2:5-8) is relevant here, not as burden but as clarity. This is what that looks like."
            },
            {
              heading: "CAREGIVERS OF AGING OR ILL FAMILY MEMBERS",
              content: "This population is largely invisible in self-help literature. They are often working full-time, caring for a dependent, managing their own household and sometimes children, and carrying grief that hasn't been named yet.\n\nThe specific issues:\n• Anticipatory grief (losing someone while they're still present but changed)\n• Role reversal (becoming parent to a parent)\n• Invisible labor with no social recognition\n• Financial strain from reduced work hours and caregiving costs\n• Identity erosion — who are you when your role is entirely defined by someone else's need\n• Anger, guilt, and love simultaneously\n\nWhat to do:\n• Name that you are in a caregiving season. It requires explicit acknowledgment.\n• Find your specific support: caregiver support groups, respite care, therapists who specialize in this\n• Grief is present and appropriate — both for the person you're losing and for your own life in the meantime\n• This is finite. Plan for what comes after, even while in it."
            },
            {
              heading: "PEOPLE IN EARLY SOBRIETY (0-24 MONTHS)",
              content: "Standard productivity and optimization protocols are generally contraindicated in early sobriety. The work of early sobriety is neurological repair and foundational identity rebuilding — a full-time occupation that does not leave spare capacity for implementing comprehensive life systems.\n\nWhat to do instead:\n• The one job is staying sober. Everything else is secondary.\n• Use the existing evidence-based frameworks: AA/NA and their 12-step model has the strongest longitudinal evidence of any addiction recovery approach\n• Build community before building habits\n• Professional support (therapist with addiction specialization) is not optional\n• Spiritual formation in early recovery is available through the 12-step model itself — which is more theologically substantive than most churches acknowledge\n• After 12-18 months of stable sobriety, the original playbook becomes more applicable"
            },
            {
              heading: "MAJOR LIFE TRANSITION (DIVORCE, RETIREMENT, EMPTY NEST, MAJOR LOSS)",
              content: "When a primary identity-defining role ends or changes catastrophically, the standard productivity approach is inadequate not because it's wrong but because it addresses performance while the real work is identity reconstruction.\n\nThe specific work:\n• Who am I now that I'm not [spouse/parent at home/career person/married person]?\n• What parts of my pre-transition self were real vs. role?\n• What do I want to carry forward?\n• What was I postponing that I can now pursue?\n\nThis takes longer than most people expect — often 2-3 years for major transitions. The original playbook becomes useful again once the primary identity reconstruction is underway. Not before."
            }
          ]
        },
        {
          id: "chapter11",
          title: "CHAPTER 11: ECONOMIC JUSTICE",
          subtitle: "The Other Half of Biblical Finance",
          sections: [
            {
              heading: "WHAT THE ORIGINAL COVERED AND WHAT IT MISSED",
              content: "The original playbook's financial sections are practically sound. Budget wisely. Eliminate debt. Index funds over speculation. Automate savings. These are accurate and useful.\n\nWhat they do not address is this: the Bible's primary teaching on money is not personal stewardship. It is communal justice.\n\nA Bible that only teaches personal stewardship is a selectively read Bible."
            },
            {
              heading: "WHAT SCRIPTURE ACTUALLY SAYS (THE PARTS THAT DON'T GET PREACHED)",
              content: "Isaiah 58:3-7: God rejects the fasting of people who oppress their workers, and calls the 'fast I choose' to loose the bonds of injustice, let the oppressed go free, share bread with the hungry, and bring the homeless poor into your house.\n\nAmos 5:21-24: 'I hate, I despise your feasts, and I take no delight in your solemn assemblies... But let justice roll down like waters, and righteousness like an ever-flowing stream.' God tells Israel He is not impressed by their worship when their economic practices harm the poor.\n\nLuke 4:18: Jesus' inaugural declaration of his mission includes specific mention of the poor, the captive, the oppressed.\n\nMatthew 25:31-46 (The Sheep and the Goats): The criterion of judgment in this passage is: did you feed the hungry, give drink to the thirsty, welcome the stranger, clothe the naked, care for the sick, visit the prisoner?\n\nLuke 16:19-31 (Rich Man and Lazarus): A rich man who ignores a poor man at his gate ends in torment. There is no indication the rich man was particularly wicked — he simply ignored Lazarus while living in luxury.\n\n1 John 3:17: 'If anyone has the world's goods and sees his brother in need, yet closes his heart against him, how does God's love abide in him?'"
            },
            {
              heading: "THE ADDITIONAL FINANCIAL QUESTIONS A CHRIST-CENTERED PLAYBOOK MUST ASK",
              content: "Beyond the personal stewardship audit, these:\n\n• Who is my Lazarus? Whose poverty am I proximate to and choosing not to see?\n• Does my wealth come from just means? Are the companies I invest in, work for, or buy from treating workers, supply chains, and the environment justly?\n• What does my church do with money? Does it allocate meaningfully toward the poor, the oppressed, the marginalized — or primarily toward its own operations and comfort?\n• Am I fighting systemic poverty or just doing charity? Individual generosity is good. Advocacy for structural change is also biblical. The prophets were not content with charitable giving — they called out unjust systems.\n• What is 'enough'? The original playbook treats income increase as an unambiguous good. The Bible is more complex. Jesus warns about the deceitfulness of wealth (Mark 4:19). Paul says he has 'learned to be content' in both abundance and need (Philippians 4:11-12). What is your number?"
            },
            {
              heading: "THE PRACTICAL INTEGRATION",
              content: "This is not a call to guilt or to radical divestiture (though that may be the call for some). It is a call to let the biblical witness on money and justice be complete, not partial.\n\nPractical steps:\n1. Make economic justice a budget line. Not just tithing to church — specifically directed toward poverty, systemic injustice, housing, food insecurity, justice advocacy.\n2. Learn about what you're investing in. Knowing where your money goes is stewardship.\n3. Understand your local economy. Who is poor near you? What are the structures producing that poverty? Engagement, not just donation.\n4. Vote accordingly. Economic justice is a civic issue, not just a charitable one. Your vote is also a stewardship decision."
            }
          ]
        },
        {
          id: "chapter12",
          title: "CHAPTER 12: THE CONTEMPLATIVE TRADITION",
          subtitle: "2,000 Years of Wisdom the Church Forgot",
          sections: [
            {
              heading: "THE GAP",
              content: "The original Christ-centered playbook's spiritual life section is almost entirely action-oriented: journaling, prayer, accountability, study, memorization, service, experiments. All of these are good. They are one half of the tradition.\n\nThe other half — the contemplative tradition — is older, richer, and has been largely abandoned by evangelical and charismatic Christianity over the last century in favor of the more active, measurable, productive forms of spirituality.\n\nThe contemplative tradition is not:\n• Eastern meditation dressed in Christian language\n• An optional extra for monks\n• Emptying the mind (the common misconception)\n\nIt is:\n• The oldest continuous tradition of Christian spiritual practice\n• A specific set of practices for deepening attention to God's presence\n• Evidence-supported for reducing anxiety, increasing spiritual depth, and producing the fruits of the Spirit\n• What the Desert Fathers and Mothers (3rd-5th centuries), the great medieval mystics, and figures like Thomas à Kempis, Brother Lawrence, and Julian of Norwich practiced and documented in detail"
            },
            {
              heading: "LECTIO DIVINA (SACRED READING)",
              content: "Not reading about God. Reading to encounter God. A slow, meditative approach to Scripture:\n1. Lectio — Read the passage slowly, twice. Notice a word or phrase that catches your attention.\n2. Meditatio — Sit with that word. Turn it over. Let it speak.\n3. Oratio — Respond to God from what arose. Don't manage it. Respond.\n4. Contemplatio — Rest in God's presence without agenda. Not thinking. Being.\n\nDuration: 20-30 minutes minimum. A passage of 4-8 verses is typically sufficient."
            },
            {
              heading: "THE EXAMEN (IGNATIUS OF LOYOLA, 16TH CENTURY)",
              content: "A 15-minute daily review of the day in God's presence. Not journaling. Not productivity review. A spiritual practice.\n1. Gratitude — What today was gift? Let it be felt, not catalogued.\n2. Review — Walk through the day. Where were you most alive? Most drained?\n3. Contrition — Where did you miss the mark? Without excess guilt.\n4. Hope — What does tomorrow need? Bring it to God.\n\nResearch: The Examen is reported across centuries as one of the most reliable practices for developing integrated awareness of God's presence in ordinary life."
            },
            {
              heading: "CENTERING PRAYER",
              content: "Not emptying the mind. Consenting to God's presence and action within. A specific technique:\n• Choose a sacred word (a name of God, a simple word like 'peace' or 'mercy') as symbol of your consent\n• Sit quietly for 20 minutes. When thoughts arise — and they will — gently return to the sacred word\n• Not achievement of silence. Simply, repeated consent to God's presence.\n\nNote: This practice has been controversial in some evangelical circles. Before dismissing it, read Thomas Keating's original description and evaluate it on its merits against Scripture, not against others' objections to it."
            },
            {
              heading: "THE DAILY OFFICE AND BROTHER LAWRENCE",
              content: "The Daily Office:\nThe practice, going back to the early church and formalized by Benedict (6th century), of pausing multiple times daily for brief prayer. Morning prayer, midday prayer, evening prayer, and compline (night). The Book of Common Prayer and Northumbria Community's Celtic Daily Prayer offer accessible modern forms.\n\nNot a burden. A rhythm. The difference between the spiritual life as 'quiet time I do once a day' and the spiritual life as 'the air I breathe all day.'\n\nBrother Lawrence's Practice of the Presence of God:\nAn unschooled 17th-century monk who discovered that God could be as present in washing dishes as in formal prayer. His letters — assembled in the brief book The Practice of the Presence of God — are among the most practical mystical writings ever produced.\n\nThe practice: Talking to God continuously about ordinary things. Not a technique as much as an orientation. 'Here I am, and here You are, and I notice You.'"
            }
          ]
        },
        {
          id: "chapter13",
          title: "CHAPTER 13: FIXING THE SCIENCE",
          subtitle: "What the Original Got Wrong That Matters",
          sections: [
            {
              heading: "THE STREAK PROBLEM",
              content: "The original playbook states: 'If you break the streak, start over. No exceptions.'\n\nThis is not supported by current behavioral science and is likely counterproductive.\n\nWhat the research actually shows:\nThe Lally (2010) study cited by the original shows habit formation taking 18-254 days (mean 66). The range is enormous — the mean is not a target, it's an average across widely varying behavioral complexity.\n\nMore importantly: The 'what-the-hell effect' (Polivy & Herman, 1985) is one of the most replicated findings in behavioral psychology. When people who are trying to maintain a behavior experience a failure under all-or-nothing framing, they significantly increase the undesired behavior rather than returning to baseline.\n\nWhat to replace it with:\n'Never miss twice.' — A single miss is friction. Two consecutive misses is the beginning of a pattern. This is both more accurate to the science and vastly more compassionate.\n\nPercentage tracking over streak tracking. — 'I completed this 24 of 30 days' is more accurate, more motivating, and more resistant to the all-or-nothing collapse. Aim for 80% consistency. That's a successful habit."
            },
            {
              heading: "THE 4% RULE UPDATE",
              content: "The original playbook presents the 4% rule as reliable for 30-year retirement planning. It should include:\n\nWhat to know: Morningstar's 2024 retirement income research suggests 3.3-3.7% may be more appropriate given current interest rates, bond yields, and longer life expectancy. For early retirement (before 60), many financial planners recommend 3% or below.\n\nThe 4% rule is a historical observation, not a guarantee. It is based on Bengen's (1994) analysis of historical US market data. It does not account for:\n• Unusually high market valuations at retirement start (sequence-of-returns risk)\n• Current low bond yields\n• Longer life spans than modeled\n• Unexpected healthcare costs in the US context\n\nUse it as a rough guideline. Run actual numbers with a fee-only fiduciary financial advisor for specific planning."
            },
            {
              heading: "THE SLEEP SCIENCE CAVEAT",
              content: "Matthew Walker's Why We Sleep is cited multiple times in the original. Walker's core message (sleep matters enormously, most people are chronically underslept) is well-supported by independent literature.\n\nHowever, Alexey Guzey's 2019 analysis documented multiple factual errors and overstatements in Walker's book. Subsequent academic responses partially supported Guzey's concerns. Some of Walker's specific statistics about sleep deprivation risks appear inflated relative to the primary literature.\n\nWhat to do: The temperature ranges, sleep hygiene protocols, and general evidence for 7-9 hours are independently supported and stand. Do not treat Walker as sole authority. PubMed, the NIH sleep research literature, and the work of other sleep scientists (Czeisler at Harvard, Frank at Michigan) provide additional, independent support."
            },
            {
              heading: "POLYVAGAL THEORY CAVEAT",
              content: "The original playbook mentions polyvagal theory (Stephen Porges) as settled science. It is not.\n\nThe current scientific status: Polyvagal theory is a clinically influential and therapeutically useful framework with significant neuroanatomical critics. Several neuroscientists have challenged whether the vagal pathways function as Porges describes. The 2024 PMC review acknowledges the theory's 'current status remains debated.'\n\nWhat to do: Polyvagal-informed therapy and breathwork have practical utility regardless of whether the underlying theory is precisely correct. Use the practices. Hold the theory loosely. Do not present it as established neuroscience to anyone you're helping."
            }
          ]
        },
        {
          id: "appendix",
          title: "APPENDIX: THE THERAPIST VETTING PROTOCOL",
          subtitle: "Because 'Check Psychology Today' Is Not Enough",
          sections: [
            {
              heading: "STEP 1: KNOW WHAT YOU'RE LOOKING FOR",
              content: "Identify your primary presenting issue:\n\nTrauma/PTSD: Look for EMDR certification, somatic experiencing training, or IFS training. Specifically ask about trauma methodology.\n\nAnxiety/OCD: CBT with ERP (Exposure and Response Prevention) has the strongest evidence for OCD. ACT (Acceptance and Commitment Therapy) is strong for general anxiety.\n\nDepression: CBT, behavioral activation, interpersonal therapy all have strong evidence. Medication evaluation should be on the table.\n\nRelationship patterns: Attachment-focused therapy, EFT (Emotionally Focused Therapy for couples). Ask specifically about attachment orientation.\n\nGrief: Look for grief-specialized training. Many therapists are not specifically trained in grief work.\n\nAddiction: Motivational Interviewing (MI) background, 12-step familiarity or SMART Recovery. Ask specifically.\n\nSpiritual abuse recovery: Not all therapists understand this. Ask: 'Have you worked with clients recovering from high-control religious environments?'"
            },
            {
              heading: "STEP 2: THE QUESTIONS TO ASK IN A CONSULTATION",
              content: "Most therapists offer a free 15-30 minute consultation. Use it.\n\n• 'What's your primary therapeutic orientation?' (CBT, psychodynamic, somatic, IFS, integrative, etc.)\n• 'What specific training do you have in [your presenting issue]?'\n• 'Have you done your own therapeutic work?' — Therapists who have done their own work are generally more effective. This is not intrusive. It is appropriate.\n• 'How do you measure whether therapy is working?'\n• 'What does a typical session look like with you?'"
            },
            {
              heading: "STEP 3: RED FLAGS AND THE ALLIANCE",
              content: "Red Flags:\n• Therapist who cannot explain their methodology clearly\n• Therapist who talks about themselves more than about you in early sessions\n• No discussion of goals or what progress would look like\n• Any attempt to create dependency ('you'll always need therapy') rather than building your capacity\n• For Christians: a therapist who dismisses faith as irrelevant OR one who imposes their religious framework — you want someone who can work respectfully with your faith as part of your identity, whether they share it or not\n• Any boundary violations (physical contact beyond handshake, socializing outside sessions, unusual self-disclosure)\n\nStep 4: The Alliance Is the Treatment\nResearch consistently shows: the quality of the therapeutic alliance (do you feel safe, respected, and understood by this person?) predicts outcomes more than the specific modality. If after 3-4 sessions you feel worse about yourself, less understood, or dismissed — that is information. It is appropriate to try a different therapist."
            }
          ]
        },
        {
          id: "finalword",
          title: "A FINAL WORD",
          subtitle: "Not Every Chapter Is a Phase to Move Through Quickly",
          sections: [
            {
              heading: "A FINAL WORD",
              content: "The original playbook ends with: 'Close this document. Open your calendar. Block 30 minutes this week for Phase 0: The Audit. Do it now. Or close this and admit you're not ready to change.'\n\nThis document ends differently.\n\nThere are people for whom the audit is the right next step. Go do it.\n\nThere are people for whom the next step is sitting with grief they've never named. Do that.\n\nThere are people who are exhausted and need to hear that rest is not failure. Rest.\n\nThere are people in the dark night of the soul who need to know that the silence is not abandonment. It isn't.\n\nThere are people carrying trauma in their bodies that no productivity system will reach. Find a good somatic therapist. Be patient.\n\nThere are people who have been wounded by the institution that was supposed to hold them. Your wound is real. God is not the institution.\n\nNot every chapter of life is a phase to move through quickly. Some are to be inhabited fully, in their difficulty, with God — who is present even when unfelt, and who does not grade your progress on a 30-day streak.\n\nHis mercies are new every morning.\n\nThat includes this morning.\n\nWhatever morning this is for you."
            }
          ]
        }
      ]
    }
  },

  questions: {
    rapidFire: [
      "Where is the gap between who you say you are and what you actually do?",
      "What are you avoiding that you know would help?",
      "What are your actual energy patterns throughout the day?",
      "What's your real financial situation right now?",
      "What actually makes you feel good vs. what you use to numb?",
      "Can you survive 3 months without income?",
      "Where does your money leak unexpectedly?",
      "How many hours last week did you spend on meaningful connection vs. screens?",
      "When do you feel most alive?",
      "What conversation have you been postponing?",
      "Are you experiencing the abundant life Jesus promised?",
      "What is God nudging you about that you keep resisting?",
      "Where's your treasure - time and money reveal your true values?",
      "What scares you more: staying the same or changing?",
      "If you could change one thing immediately, what would it be?",
      "What would you do if you knew you couldn't fail?",
      "Who do you trust to hear your real truth?",
      "What brings you genuine joy vs. temporary pleasure?",
      "Are you living in a way that aligns with your deepest values?",
      "What have you been grieving in secret?",
      "What truth are you avoiding about yourself?",
      "If everything changed tomorrow, what would you regret not saying?",
      "What are you pretending is fine when it's not?",
      "What would it look like to stop waiting and start doing?",
      "Who would you become if you actually did the hard thing?"
    ],

    questionOfTheDay: [
      "What does a 'win' look like for you today?",
      "What's one thing you can control today that would make a difference?",
      "Who needs to hear from you?",
      "What small action aligns with your deepest values?",
      "What would you do if you trusted yourself completely?",
      "What are you resisting that might be exactly what you need?",
      "If today was your last, what would you prioritize?",
      "What brings you alive that you're not making time for?",
      "What truth are you ready to face?",
      "How are you stewarding what you've been given?",
      "What would brave look like today?",
      "Where do you need grace today - from God or yourself?",
      "What would genuine rest look like for you?",
      "What are you building toward?",
      "Who are you becoming with each choice today?"
    ],

    quotes: [
      { text: "You are probably lying to yourself about something important right now.", author: "The Brutal Playbook" },
      { text: "Motivation is garbage. Systems are everything.", author: "The Brutal Playbook" },
      { text: "The things you're avoiding are probably the exact things that would help most.", author: "The Brutal Playbook" },
      { text: "Jesus didn't die so you could live a mediocre, joyless life.", author: "The Brutal Playbook (Revised)" },
      { text: "Grace + discipline = everything.", author: "The Brutal Playbook (Revised)" },
      { text: "Willpower is finite. Structure is infinite.", author: "The Brutal Playbook" },
      { text: "God does not always fix the problem. That is not a failure of your faith. It is the center of your faith.", author: "The Missing Chapters" },
      { text: "The cross is the definitive statement of who God is.", author: "The Missing Chapters" },
      { text: "Trauma is stored in the body, not just the mind.", author: "The Missing Chapters" },
      { text: "Grief is the normal, healthy, painful human response to loss.", author: "The Missing Chapters" },
      { text: "You're not broken. You're using the wrong tool.", author: "The Missing Chapters" },
      { text: "Lament is the biblically modeled practice of bringing your full, honest pain to God.", author: "The Missing Chapters" },
      { text: "The anticipation is worse than the reality.", author: "The Brutal Playbook" },
      { text: "You can only control systems. You cannot control outcomes.", author: "The Brutal Playbook" },
      { text: "Any score below 5 is an emergency. Below 7 needs immediate attention.", author: "The Brutal Playbook" },
      { text: "After I ____, I will ____. That's how change actually happens.", author: "The Brutal Playbook" },
      { text: "If it sounds too good to be true, it is.", author: "The Brutal Playbook" },
      { text: "Rest is commanded, not optional.", author: "The Brutal Playbook (Revised)" },
      { text: "Joy is fruit of the Spirit, not a luxury.", author: "The Brutal Playbook (Revised)" },
      { text: "Your body is a temple. Stewardship matters.", author: "The Brutal Playbook (Revised)" }
    ]
  }
};

// Helper functions for gamification
const gamificationEngine = {
  getHourlyVariation: () => {
    const hour = new Date().getHours();
    return {
      seed: hour,
      intensity: Math.sin(hour * Math.PI / 12) * 100,
      hue: (hour * 15) % 360
    };
  },

  shuffleArray: (array, seed) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor((Math.sin(seed + i) * 10000) % (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  },

  getDailyQuote: () => {
    const day = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
    const quotes = contentData.questions.quotes;
    return quotes[day % quotes.length];
  },

  getQuestionOfTheDay: () => {
    const day = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
    const questions = contentData.questions.questionOfTheDay;
    return questions[day % questions.length];
  },

  getShuffledRapidFire: () => {
    const hour = new Date().getHours();
    return gamificationEngine.shuffleArray(contentData.questions.rapidFire, hour);
  },

  getRandomQuote: () => {
    const quotes = contentData.questions.quotes;
    return quotes[Math.floor(Math.random() * quotes.length)];
  },

  getRandomQuestion: () => {
    const questions = contentData.questions.questionOfTheDay;
    return questions[Math.floor(Math.random() * questions.length)];
  }
};
