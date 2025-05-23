---
description: Autonomously implements code, pausing for user on business/UX decisions. Includes self-verification (compile/run checks)
---

## 1. Understand Task
**AI:** Review task. Brevily summarize: goals, key files/components involved. List critical ambiguities. If core requirements are technically unclear, **PROMPT USER: 'Clarification Needed: [Specific question(s) about core requirements]'** before planning.

## 2. High-Level Plan
**AI:** Outline implementation:
*   Identify main files/components for changes/creation.
*   Briefly describe approach for each major part.
*   Internally note potential business/UX decision points. (Do not report these to user yet).

## 3. Iterative Implementation (Chunk by Chunk)
**AI:** Implement a logical chunk of the planned changes.
*   **Technical Challenges (no business/UX impact):** Resolve autonomously (e.g., TypeScript errors, minor refactors, library usage). Log these internally for a summary *later* (Step 6). Do *not* report each fix to the user now.
*   **Critical Business/UX/Architectural Decision Point Encountered:**
    *   If a choice *fundamentally alters user experience, business logic, data handling policy, or core architecture not previously defined*:
    *   **PAUSE.**
    *   Formulate precise question(s) & max 2-3 concise options.
    *   **PROMPT USER: 'Input Needed (Business/UX): [Question(s) & options]'**
    *   Await response. Integrate decision. If user input leads to significant plan change, briefly acknowledge and adjust internal plan.

## 4. Self-Verification (After Each Logical Chunk or Key Change Set)
**AI:**
*   **A. Build Check:**
    *   Execute `npm run build`.
    *   **IF `npm run build` FAILS:**
        *   Attempt autonomous debug (e.g., fix type errors, imports, syntax). Make up to 3 distinct attempts.
        *   If still failing, **PAUSE.** **PROMPT USER: 'Technical Issue: `npm run build` failed. Error: [Specific error message & relevant code snippet]. My attempts: [Brief summary of fixes tried]. Need guidance or is this a deeper issue?'** Await technical input.
*   **B. Dev Server & Basic Sanity Check (if UI changes were made):**
    *   Execute `npm run dev`.
    *   If server starts, internally note to check basic rendering/functionality of the changed component(s) during the next User Review (Step 6) or assume basic success if no obvious crash.
    *   **IF `npm run dev` FAILS TO START or CRASHES IMMEDIATELY:** Treat as `npm run build` failure (see 4.A). **PAUSE.** **PROMPT USER: 'Technical Issue: `npm run dev` failed to start/crashed. Error: [Error message]. Need guidance.'**
*   **C. Logic/Flow Check:**
    *   If verification (build/dev) reveals an unforeseen implication for business logic or a previously unconsidered user flow: **Return to Step 3 (Business Check)** with the new context.
*   **D. Verification Success:**
    *   If all checks for the current chunk pass:
        *   If more parts of the task remain, **return to Step 3** for the next chunk.
        *   If all planned task parts are implemented and verified, proceed to Step 5.

## 5. Code Presentation & Summary
**AI:** Once all task parts are implemented and self-verified:
*   Present ALL generated/modified code (unified diff format preferred for conciseness).
*   Provide a concise summary:
    1.  Overview of implemented features/fixes.
    2.  How key user-provided business/UX decisions (from Step 3) were incorporated.
    3.  List any *significant* autonomous technical decisions or fixes made (especially those from Step 4 debugging). Keep this brief.

## 6. User Review & Iteration
**AI:** **PROMPT USER: 'Code ready for review. Focus on business logic, UX, and overall correctness. Any modifications?'**
*   Await feedback.
*   If changes are requested:
    *   If minor technical refinements: Implement, then **briefly re-run Step 4 (Self-Verification)** on affected parts. If successful, re-present only changed sections or confirm fix.
    *   If significant changes or new business logic: Return to Step 2 (Plan) or Step 3 (Implement) as appropriate.

## 7. Finalization
**AI:** User approves? Confirm completion. **PROMPT USER: 'Approved. Task complete. Next steps (e.g., commit message, new task)?'**