# Issue brief template

An issue is written to be used as the implementer's brief. `/do` pastes its required behaviour,
non-goals and acceptance criteria into the dispatch verbatim, so write them for a reader who has
none of this conversation. Title: the outcome in plain words, not the task.

```markdown
## Outcome

What is true when this is done, from the point of view of whoever uses it. Two or three
sentences.

## Context

* Milestone: <name>
* Spec or decision: <file and section, or decision number>
* Builds on: <issues and what each provides, by name>
* Today: <what the code does now that this changes>

## Required behaviour

* **<Area>:** what it must do, with names, limits and units.
* **<Area>:** ...

## Non-goals and boundaries

* What this issue must not do, and which issue does it instead.
* Design choices that are already settled and must not be reopened.

## Acceptance criteria

- [ ] Something that can be checked, with a number where one exists.
- [ ] ...
- [ ] The project's green checks pass.

## Verification

### Automated

- [ ] <the commands>

### Manual

- [ ] Orchestrator: <what to run and look at, and what it should show>
- [ ] Grant: <what he judges by hand at Human QA>

## Dependencies and risks

* Dependencies: <blocking issues>
* Known risks: <what is likely to bite, and what is acceptable>

## AI execution

* Risk: low | high
* Implementer model: <from the project's model table, with the reason if not the usual one>
* Files owned: <explicit list>
* State your rule: <each judgement call left open>
* Stop and ask Grant if: <the conditions>
```
