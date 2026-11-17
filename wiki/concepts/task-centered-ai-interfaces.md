# Design AI interaction around the task

A chat box is one way to ask a model for help, not a complete answer to how a person should make a decision. The right interaction depends on what the person needs to compare, verify, edit or do next.

## Give the user the right surface

Brian Chesky describes travel search that combines natural language with visual filters, comparisons and communication with hosts.

Andrew Ng describes a marketer's research tool and finance staff automating document checks and alerts, examples embedded in particular work rather than a generic conversation.

Anton Osika demonstrates a lead inbox that ranks inquiries and presents editable drafts.

These examples suggest different interface choices for different decisions: comparison views for choosing, a queue for triage and an editable draft for communication. **Editorial synthesis:** start with the user's next decision, then select the least complicated combination of text, structure and controls that makes that decision inspectable. The examples do not show that any one format is universally best.

## Connect the screen to reality

David Rogier warns that a persuasive dashboard may be useless when it is not connected to real inputs.

Consider a hypothetical lead queue: a polished ranking is of limited value if the entries are stale or the user cannot see why a lead was ranked. As an editorial test, follow one real input through to the displayed result, check freshness, and ask the person doing the work whether the result helps. This is a suggested method, not a demonstrated performance result.

## Design for revision and constraints

A richer interface can expose useful comparisons but also introduce complexity. Natural-language requests can be flexible while leaving important assumptions implicit; structured controls can make choices visible but restrict what the user can express. Editable drafts make revision possible, but an edit control does not guarantee that the system waits for approval; see [[bounded-delegation-and-approval|approval boundaries]]. Product desirability and production readiness are separate questions, covered in [[customer-value-beyond-prototype|customer value beyond the prototype]].

**Open questions:** Which inputs need provenance and freshness indicators? Can a user correct the system without starting over? What happens if an integration fails or a recommendation is wrong?

**Source limitations:** The examples come from derived summaries of captions with unknown track origin and unverified completeness and audio fidelity. Company descriptions and demonstrations do not establish security, adoption or comparative effectiveness.

## Sources

- [[siliconvalleygirl-library-video-09|Brian Chesky: People Who Know What to Build With AI Will Pull Ahead]] — `iJlyNupMOzA`
- [[siliconvalleygirl-library-video-12|$13B Lovable Co-Founder: Build a Profitable AI Product From Scratch in 30 Minutes]] — `KEAYPqQG2-M`
- [[siliconvalleygirl-library-video-17|Andrew Ng: The Biggest Opportunities in AI Aren't Where You Think]] — `o-wv_szZ0V0`
- [[siliconvalleygirl-library-video-27|Godmother of AI: In 10 Years There Will Be Only 2 Kinds of Workers | Fei-Fei Li]] — `subu-xHrp1w`
