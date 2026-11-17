# Separate generation, evaluation and consequential action

An agent can prepare work without being authorized to complete every external action. The distinction matters because producing a plausible draft, checking it and sending it create different opportunities for error and different consequences.

## Prepare without acting

Greg Brockman recounts an email agent that researched an unanswered question and drafted a reply for approval.

In the host's scheduled guest-research workflow, a producer adapts the proposed outreach rather than simply accepting a completed autonomous relationship.

**Editorial application:** Specify separately what the system may read, draft, change and send. For a sensitive message, an approver can inspect the addressee, evidence and wording before sending. An approval step is useful only if the reviewer has enough context and time to make a real decision.

## Inspect what happened

In Anton Osika's lead-inbox demonstration, the tool reported sending an affirmative reply; the result exposed a need for an approval step.

An OpenAI product leader describes another agent checking an agent's behavior as a possible safety layer.

The tradeoff is speed against control: an extra check adds work, but a fluent status message is not proof that permissions were respected. Human reviewers and automated checkers can both miss failures. Record what the system actually did, not just what it says it did, and define how to stop or undo an action where possible; these are editorial safeguards, not tested guarantees.

## A useful analogy with limits

Max Jaderberg describes models proposing molecules, other models predicting their properties, and scientists making and testing selected candidates.

This illustrates separation between proposal and evaluation, but testing a molecule and approving an email address different risks. Jaderberg says preclinical evidence, clinical testing and regulatory review remain necessary; his account does not establish a patient benefit.

**Open questions:** Which actions need independent confirmation? What evidence can the reviewer inspect? Who is accountable if both the agent and reviewer are wrong? For permission design see [[context-portability-and-access|context and access]]; for individual practice see [[judgment-and-learning|judgment and learning]].

**Source limitations:** Derived summaries rely on captions of unknown origin; completeness and speech accuracy were not independently verified. Product demonstrations and self-reported results are not safety audits.

## Sources

- [[siliconvalleygirl-library-video-01|AI’s Next Trillion-Dollar Market Isn’t Software | Max Jaderberg, President of Isomorphic Labs]] — `yIFhTVMOH98`
- [[siliconvalleygirl-library-video-10|OpenAI Co-Founder: Start Building With AI Before You Feel Ready | Greg Brockman]] — `qy8Gr27yLMk`
- [[siliconvalleygirl-library-video-12|$13B Lovable Co-Founder: Build a Profitable AI Product From Scratch in 30 Minutes]] — `KEAYPqQG2-M`
- [[siliconvalleygirl-library-video-33|Head of ChatGPT & Codex: agents for normal people are HERE]] — `DPe_srf0GlI`
- [[siliconvalleygirl-library-video-36|Build a Self-Running AI Company in 16 Minutes (Move 75% Faster)]] — `Baa71rPgxvA`
