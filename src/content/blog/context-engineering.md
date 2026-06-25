---
title: "Context engineering"
description: "The real discipline was never about prompts"
pubDate: 'Apr 22 2026'
---

## The real discipline was never about prompts

"Prompt engineering" was always a weird term. It implies the work is in the words you type to the model. It implies there's some incantation that unlocks the right output if you just phrase it correctly.

That's not what the work is.

The actual discipline is context engineering: what you put in the window, how you shape the tools the agent can reach, and—maybe most importantly—what you deliberately leave out. The model's intelligence is not the bottleneck. What it can see is.

I learned this the hard way. Cost me about three weeks of debugging the wrong thing.

### The agent that was failing for the wrong reason

We were building Raiders—autonomous research agents that run multi-step investigations across sources and produce structured outputs. One particular workflow kept failing mid-task. Agents would lose track of their objective, start chasing irrelevant threads, produce outputs that technically answered the question but missed the point entirely.

My first instinct was the model. Maybe it wasn't capable enough. Maybe I needed something smarter.

So I did the expensive thing: I added logging. Real logging. Not print statements—structured traces of what was in the context window at each reasoning step.

What I saw made me cringe.

The agent's context was a disaster. Accumulated tool outputs from early in the workflow. Redundant metadata. Previous agent messages that no longer mattered but were still taking up space. By the time the agent was three steps in, the relevant signal was buried under noise.

The model wasn't lost because it was dumb. It was lost because the window looked like my inbox after a week of vacation.

### What context engineering actually means

Fixing Raiders didn't involve switching models or rewriting prompts. It meant redesigning what the agent could see at each step.

We rebuilt the tool interfaces in Ohtools—cleaner descriptions, explicit output contracts, metadata that tells the agent exactly what a tool returns and when to call it. We added a context pruning layer that strips irrelevant prior outputs before each reasoning step. We made the agent's north-star spec persistent and prominent in the window, not buried under accumulated noise.

The failure rate dropped sharply.

None of that was prompt engineering. It was context engineering.

### The million-token window problem

Here's the thing about giant context windows: they make this harder, not easier.

When you have a tight window and you're running out of space, you're forced to think hard about what to include. The constraint is clarifying.

When you have a million-token window, there's no forcing function. Everything fits. So everything goes in. And suddenly your agent is reasoning over a context that includes twelve irrelevant tool outputs, a bunch of previous thoughts that led nowhere, and three copies of the same document because you fetched it from slightly different endpoints.

The bottleneck shifted. It used to be "can we fit the relevant information in the window?" Now it's "can the agent find the relevant information in all this noise?"

This is the discipline that matters right now. Not making windows bigger—filling them better.

### Designing tool surfaces for agents

There's another dimension to context engineering that doesn't get talked about enough: the tools themselves.

An agent's capability is bounded by what its tools can do. But an agent's *reliability* is bounded by how well it understands what those tools do.

If you've ever written an MCP tool with a vague description, watched an agent call it at the wrong time or with the wrong inputs, and then blamed the model—you were debugging the wrong layer. The tool's metadata is part of the context. It shapes how the agent reasons about what's available and when to reach for it.

Research on AI in cybersecurity contexts—[Artificial Intelligence in Cybersecurity](https://zenodo.org/records/19463970)—found that tool and context shaping measurably changed vulnerability discovery outcomes. The agents weren't smarter; the context was cleaner. That's the whole game.

**Treat tool definitions like an API.** If a human can't understand exactly what a tool does from its description alone, an agent can't either.

**Design for the agent's mental model, not yours.** You know what the tool does. The agent only knows what you tell it. Those are different things.

**Output contracts matter.** Describe what the tool returns, not just what it takes. Agents use return shapes to reason about how to chain tools together.

### The discipline nobody is teaching

I think the industry mislabeled this whole area early on and we're still paying for it. "Prompt engineering" sounds like a temporary workaround—a skill you'll stop needing once models get smart enough.

Context engineering is a permanent discipline. Better models don't make context design irrelevant. They change the shape of the problem. A smarter model makes better use of well-structured context. It still can't make good use of noise.

What are you putting in the window?
