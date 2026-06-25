---
title: "The model is not the product"
description: "Stop obsessing over the leaderboard and build the harness"
pubDate: 'Mar 18 2026'
---

## Stop obsessing over the leaderboard and build the harness

Every week there's a new benchmark. Someone drops a new model, the leaderboard shuffles, and I watch engineers debate which frontier model is on top right now. Heated Slack threads. Long takes on LinkedIn. Comparative benchmarks on coding tasks that nobody who ships production code actually cares about.

Meanwhile, the teams actually building agentic products are barely paying attention.

Here's the thing nobody says out loud: by mid-2026, the gap between top frontier models is narrow enough that it barely matters for most real workloads. What matters is everything around the model. The specs. The tools. The context. The orchestration. That's the actual product.

The model is a commodity. The harness is where the leverage is.

### The swap that changed nothing

Last year, we swapped the underlying model powering Crew—our multi-agent orchestration layer—from one frontier model to another. Newer, supposedly smarter, higher on the coding benchmarks.

Results? Marginal. A few percentage points better on the tasks we cared about. Nothing that would show up in a quarterly review.

Then we spent a month improving tool definitions in Ohtools—better metadata, cleaner interfaces, explicit descriptions of what each tool expects and returns. We tightened the spec templates agents use as their north star. We pruned irrelevant context from the window before each reasoning step.

That moved the needle. Dramatically.

The model didn't change. The harness did. And suddenly agents were completing tasks they'd been failing on for weeks.

### Why leaderboard obsession is the wrong game

I get why engineers fixate on models. It's legible. There's a ranking. Someone's winning. It feels like a real technical decision.

But the model is probably the least interesting variable in an agentic system right now.

What actually determines whether your agent succeeds:

**The spec quality.** An agent working from a vague spec will hallucinate direction. An agent working from a tight, structured spec will execute. The model's intelligence matters way less than the clarity of what you're asking it to do.

**The tool surface.** Agents are only as capable as the tools they can reach and how well those tools are described. A poorly-named tool with an ambiguous description costs you more than a model tier.

**The context window contents.** What's in the window when the agent reasons shapes everything downstream. Garbage in, garbage out—and no frontier model compensates for noise.

**Where humans intervene.** This one doesn't get enough attention. Research I ran earlier this year—[The Intervention Penalty](https://zenodo.org/records/19457265)—found that the *where* and *how often* of human checkpoints in AI coding governance is a measurable cost, not a vibe. Every unnecessary checkpoint taxes the system. Every missing one risks drift. Getting that calibration right is a design problem, not a model problem.

### The craft that's actually worth investing in

None of this means models don't matter. They do, at the margins. But if you're spending engineering time chasing model releases instead of hardening your harness, you're playing the wrong game.

The teams shipping durable agentic products are investing in:

**Spec-driven workflows.** Clear, structured specs that agents can parse unambiguously. Not natural language essays. Structured inputs with explicit constraints.

**Tool design.** Treating your tool definitions like an API. If a human couldn't understand the interface from the description alone, an agent can't either.

**Context curation.** Deciding what doesn't go in the window is as important as deciding what does. This is a discipline. Million-token windows don't make this easier—they make it harder to notice when you're drowning the agent.

**Autonomy calibration.** How much can the agent do before checking in? What triggers a human checkpoint? These are architectural decisions with measurable consequences. Treat them that way.

### The leaderboard will shuffle again

It always does. Whatever model is on top today won't be on top in three months. The benchmarks will shift. Someone will publish a new eval. The discourse will restart.

Your harness, your specs, your tool interfaces—those compound over time. They don't expire when a new model drops.

Make it easy to swap models. Make your architecture model-agnostic from day one so the swap takes an afternoon. Then spend the rest of your engineering time on the stuff that actually moves your system forward.

The model is table stakes. The harness is the product.
