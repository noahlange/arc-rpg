# Hacking

In the waning years of the twenty-first century, everything—and I mean everything—is networked. Doors and windows can be opened and closed with the wireless protocol of your choice. Vitals trackers phone home to your medical provider, cybernetic ears and eyes x` hooked up to your hand term. This is a blessing and a curse, providing immense convenience at the expense of privacy and security.

Unfortunately for users, as devices gradually shift from being profit centers to liabilities, their manufacturers become increasingly uninvested in keeping them secure—and regardless of whatever government regulations and restrictions were once in place, they certainly aren’t now. Given this and the average individual’s penchant for delaying software updates as long as humanly possible, it turns out that most things out there are vulnerable in one way or another.

Since most people are entirely uninteresting, few of them will catch the eye of dedicated or malevolent hackers. However, the PCs tend to deal mostly with interesting people—or at the very least, uninteresting people standing in the way of interesting things. And as it turns out, a hacker with the keys to Bob the Security Guard’s pacemaker can be Very Bad News indeed.

# Exploits

## Characteristics

### Severity

The most significant factors used to assess the power (and value) of an exploit are its attack vector, complexity and power. The street value of an exploit rises proportionately to these factors—as does the attention it’s likely to attract from infosec types and the speed with which mitigations are developed.

### Vector

An exploit’s attack vector is the medium by which it’s executed. The severity reflects the level of physical proximity required by the hacker—i.e., physical access, network access, &c. The “other side of the x” mnemonic can help you visualize this.

- a **local** vector can reach the other side of the table
- a **network vector** can reach the other side of the building
- an **adjacent network** vector can reach the other side of the street
- a **remote vector** can reach the other side of the world

Infosec orgs and corps often concern themselves primarily with remote exploits, leaving vendors to fix network and local vulnerabilities.

### Complexity

Complexity is the difficulty associated with and technical skills required to exploit a vulnerability. Complex exploits often take advantage of hardware vulnerabilities, subtle programming errors and carefully-constructed conditions, and typically require a great deal of technical expertise on the part of the hacker. Low-complexity exploits are often of the “fire-and-forget” model and rarely require more than rudimentary technical skills.

## Integrity

The amount of power an exploit grants the hacker is the other major factor in determining its severity. Having the ability to draw a mustache on every face in a target’s current desktop background makes for a cute trick, but having read/write access to every device on a network makes the hacker a god.

## Availability

### Venerable

Some exploits are old enough to drink and drive. They’re easy to acquire and easier to run, even on the oldest decks. Most modern devices won’t be susceptible to them, but the prevalence of older equipment and ignorant users still ensures a steady supply of targets.

### Modern

Due to the general reticence of end-users in keeping their devices up-to-date, exploits that have had enough time to see mitigations created and deployed can still be valuable in the right situations. Newly-introduced products might avoid these issues entirely. Modern exploits can be used successfully against most lower-level professional security systems, as well as many popular commercial devices.

### Cutting-Edge

The highest-quality exploits available to corps and governments are often on the commercial market. They’re inevitably leaked and disseminated by hacker groups, and are quickly identified and flagged by infosec orgs. Mitigations for these exploits are often in development or have only been recently released.

### Zero-Day

Zero-day exploits are those unknown to vendors and individuals responsible for threat mitigation, named after the number of days of a vendor has to fix them. Many hacker groups—corp, government and freelance—maintain a private stockpile of unused zero-days to maintain an advantage against targets as the latest generation of exploits are addressed. As these exploits are mitigated or patched, new zero-days are unreleased.

## Types

### Privilege Escalation

Privilege escalation vulnerabilities (**SUDO** exploits) allows a user with limited system access to increase their access level without authorization. Acquiring “root” status grants an attacker virtually unlimited access to the device in question. These are the most dangerous (and valuable) exploits, but are also relatively uncommon, difficult to execute and among the first to be addressed by infosecs.

### Memory Safety Exploits

that utilize memory safety violations (**RAM** exploits) can introduce a wide variety of unpredictable behavior, ranging from unprompted behavior to corrupted data to device crashes. While in practice these can resemble denial-of-service (DoS) attacks, their effects often persist after the attacker has turned their attention elsewhere.

### Denial of Service

Denial-of-service attacks (**DoS** exploits) render technology unable to perform its intended functionality, often by bombarding it with unexpected input and requests. While these exploits are disruptive, DoS attacks require concentrated resource usage and rarely persist after an attack ceases.

### Profilers

As vulnerabilities are patched and mitigated, exploits can grow stale over time, especially against high-tech and high-value targets. More thoughtful freelancers will ensure that mission-critical components are up to date before taking on high-risk jobs to avoid being caught flat-footed with an unexpectedly-useless exploit.

> _Example_: Seconds from being spotted, Bobby Bobberson quickly runs a back-pocket exploit to disrupt a corpo guard's cybernetic optics. Unfortunately for Bobby, a firmware update was released last week that patched the vulnerability used by Bobby’s exploit—and even more unfortunately, the guard in question was meticulous in keeping up with his security updates.

Likewise, hackers going toe-to-toe with powerful corps must know when to play their aces and when to pocket them for another game. Prematurely exposing a zero-day when an existing hack would work can give infosecs a chance to develop mitigations for future incursions. Profilers are small databases that do the hard work of pairing devices to exploits, warning the user if they attempt to use a patched exploit against a prepared target.

# Composing exploits

## Libraries

A basic exploit is composed of two components: a payload (some action for a given type of hardware), one or more target architectures and an exploit vector (network, adjacent, local).

> _Example_: Bobby Bobberson’s ill-fated exploit was developed to remotely access Foobar Corp’s (architecture: **Foobar Corp Cybernetics**) cybernetic optics and temporarily blind his opponents (payload: **DoS**).

Many exploits are designed to target multiple architectures and device types using the same payload and attack vector. Over time, hackers tend to assimilate a broad variety of components into their personal “library”, allowing them to quickly assemble and deploy custom exploits without having to repeatedly consult domain experts.

Hackers often pair libraries with scanner dictionaries to automatically recommend viable exploit vectors. Scanners are conservative by nature and gauge recommendations by their odds of success. And while there are situations in which using a bleeding-edge, maximum-odds-of-success exploit is warranted, playing a tried-and-true exploit and reserving the newest weapons for the last possible moment will help hackers stay ahead in the Red Queen’s race with infosec.

A hacker’s plaintext library is among their closest-guarded secrets and the source of much of their power. Biometric authentication systems and advanced encryption algorithms are mainstays of library security. Despite this, basic libraries can be found easily on the black market, as can specific components. More elaborate, timely or ones with famous names attached can be found at invite-only, private auctions at exorbitant prices.

## Specialists

Being able to develop, compile and deploy exploits of your own can make you a uniquely formidable opponent. However, since the average freelancer is rewarded for flexibility, speed and breadth (rather than depth) of knowledge, investing time and energy into the intense specialization required to build exploits entirely from scratch is rarely worth the effort.

Instead, most hackers building custom exploits take advantage of the knowledge and experience of domain experts. Many corps use proprietary or custom processor architectures, so finding hackers who specialize in devices from a single manufacturer tends to be easier than finding one familiar with four or five.

Likewise, developing exploits for different types of devices often requires specialized knowledge and education—formal or otherwise. The difference between being able to crack a basic hand terminal and being able to compromise a cybernetic device is about six years of professional experience in biomedical engineering.

Most specialists utilize the services of intermediaries and distributors—colloquially, “librarians”—to connect them to hackers and freelancers. In turn, specialists will often hire freelancers to acquire cutting-edge tech, prototypes and device schematics to stay ahead of the curve.

## Compilation

No matter the eventual deployment strategy, hackers follow the same general procedures when compiling an exploit to an executable: pick your payload, your target, a vector and any goodies you’d like sprinkled on top. Hit compile and grab a bite to eat—it might take a bit.

### Compiling an exploit

First, the hacker picks a payload. The payload is a specific action performed on a device using one of the main exploit types. Payload compile time typically ranges from 1-10 seconds—this is the first factor in overall compile time.

Then the hacker picks one or more exploit vectors: local, adjacent network and/or remote network. The skill required to compile an exploit increases with the distance required to use it.

Once an exploit’s payload and attack vector are chosen, the hacker picks target architectures. Compiling an exploit for a more complex architecture requires additional time, as does compiling for multiple architectures. Secondary and tertiary features ("riders") can also be added to modify an exploit’s behavior at runtime: making it self-perpetuate worm, execute quickly, remove evidence once run, &c.

#### Skill checks

Compiling an exploit requires a check of the Hardware, Software or Wetware skills, depending on the exploit’s target.

#### Compile time

Multiplying the exploit’s payload, attack vector, targets and tags gives the total compile time. A higher skill reduces compile time. The core payload of Bobby Bobertson’s optic exploit has as a compile time of 2 seconds. Bobby wants to make it particularly easy to use, so he chooses a remote network attack vector (10 seconds) and four target architectures of varying complexity (1, 2, 3 and 4 seconds, for a total of 10), along the “worm” tag (3 seconds), which allows it to spread automatically.

Upon realizing the compile time for the exploit could be over a hundred turns (2×10R×10×3=600 sec, or 10 minutes), he figures it might make more sense to compile it before heading out.

# Developing exploits

For those with the patience and skills, developing a new exploit can be significantly more rewarding than merely combining components into an executable. Along with requiring significantly more skill, time and domain knowledge, it also presupposes physical access to the device or system in question and a solid understanding of reverse engineering techniques. Assuming those preconditions are met, there are a few approaches to reverse engineering.

1. Traffic analysis, including packet sniffing and bus analysis. Bus analysis is helpful for reverse-engineering the instructions actually used to trigger behavior. Packet sniffing is used to figure out how the device communicates with other devices wirelessly.
2. Disassembly and/or decompilation. Disassembly involves converting the raw machine code running on a device to nominally human-readable instructions in assembly language. Decompilation involves taking the generated assembly code and using specialized software, recreating it in a higher-level programming language, at which point exploits can be more easily developed.

Depending on the type and quality of the product, developing an exploit may require one or more skill checks.

# Using exploits

## Deployment

### Ramhack

For those without the time or technical affinity to compile and run exploits against targets in real-time, ramhacks (or simply rams) are prepackaged binaries can be executed at a moment’s notice, often distributed as disposable flash chips and cached in a deck’s RAM.

Because ramhacks are compiled to target specific architectures—sometimes even device models—they lack the flexibility of a proper source exploit, but require much less technical ability to use. The convenience of ramhacks make them an excellent source of income for enterprising hackers.

Regardless, their ability to be executed _en masse_ makes them an invaluable tool in the belt of a skilled hacker. Those with a good understanding of their targets’ capabilities will typically create a variety of ramhacks before starting a job.

### Slowhacks

Slowhacks are manually-compiled against specific architectures and runtimes. While more flexible, powerful and consistently effective than off-the-shelf ramhacks, creating a slowhack requires technical skill to construct, as well as compilation time before being used.

|     | Vector   | Time | DS  | Description          |
| :-: | :------- | :--: | :-: | -------------------- |
| L1  | Physical |  1   | -1  | "across the table"   |
| L2  | Local    |  3   | -3  | "across the room"    |
| R1  | Network  |  3   | -3  | "across the hallway" |
| R2  | Adjacent |  5   | -5  | "across the street   |
| R3  | Remote   |  10  | -10 | "across the world"   |

|     | Architecture             | Time | DS  | Examples                                                              |
| :-: | ------------------------ | :--: | --- | --------------------------------------------------------------------- |
| C1  | Consumer, obsolete       |  1   |     | Vehicles, household electronics.                                      |
| C2  | Consumer, low grade      |  3   |     | Personal computers, hand terms, used cybernetic implants.             |
| C3  | Consumer, high grade     |  5   |     | Mid-tier security systems, enthusiast/second-hand pro gear.           |
| P1  | Professional, obsolete   |  3   |     | Cheap cybernetic implants, most existing tech infrastructure.         |
| P2  | Professional, low grade  |  5   |     | High-quality cybernetics, new-construction tech infrastructure        |
| P3  | Professional, high grade |  7   |     | Bleeding-edge tech, large corp security.                              |
| I1  | Industrial, obsolete     |  5   |     |                                                                       |
| I2  | Industrial, low grade    |  7   |     |                                                                       |
| I3  | Industrial, high grade   |  9   |     |                                                                       |
| M1  | Military, obsolete       |  5   |     | Paramilitary forces, 2nd tier militaries, most gov't facilities.      |
| M2  | Military, low grade      |  7   |     | First-tier military GI, high-level security forces, megacorp security |
| M3  | Military, high grade     |  9   |     | Top-tier spec ops implants, top-secret clearance security facilities  |

| Rider   | Time | DS  | Description                                   |
| ------- | :--: | :-: | --------------------------------------------- |
| Airhack |      |     | Allows LoS attacks on out-of-network targets. |
| Worm    |      |     | Effect spreads to hostile targets. F&F-only.  |
| Fast    |      |     | Effect begins immediately.                    |
| Long    |      |     | Effect lasts longer.                          |
| Silent  |      |     | Reduces chance of detection by EDA.           |
| F&F     |      |     | Remove concentration requirements.            |
| Trap    |      |     | Execute payload when condition is triggered.  |

# Vectors

# Payloads

## Types

| Exploit | Type | F&F? | Description                                                                   |
| :------ | :--: | :--: | :---------------------------------------------------------------------------- |
| Daemon  |      |      | Dispatch a process to linger, performing a specific action.                   |
| Ping    |      |  N   | Inspect a system.                                                             |
| Lag     | DoS  |  N   | Bog down a device with garbage input.                                         |
| Peg     | DoS  |  N   | Bring a device to a halt with garbage input.                                  |
| Glitch  | RAM  |      | Intermittently and randomly corrupt device input.                             |
| Int     | RAM  |      | Temporarily interrupt a device input stream.                                  |
| Reboot  | RAM  |      | Force a device to perform a mostly-inconspicuous "soft-reboot".               |
| Term    | RAM  |      | Force a hard shutdown and restart; has the chance to create issues on reboot. |
| Block   | SUDO |  N   | Intercept and discard device input.                                           |
| Hijack  | SUDO |  N   | Intercept and rewrite device input.                                           |
| Leech   | SUDO |  N   | Intercept and redirect device input.                                          |
| Kill    | SUDO |      | Disable or short-circuit a device.                                            |

## Daemon

## Lag

## Peg

Analogue dial gauges are typically fit with pegs to protect their indicator needles from being damaged by overextending. When these devices are forced outside of normal operational parameters, the indicator needle, instead of striking the gauge housing or making a full rotation, is blocked by the peg—or “pegged”. The figure of speech carried was carried over to describe the state of a CPU pushed to its maximum capacity.

The amount of garbage input required to peg a device is often an order of magnitude greater than the amount required to make one lag, but a pegged device is rendered unusable, rather than intermittently unstable.

> Boopy Bopperson floods the wireless interface for their enemy’s prosthetic leg with a massive amount of on/off impulses. The enemy falls to the floor as the artificial muscle fibers in their leg contract and expand uncontrollably—they’re rendered immobile.

## Glitch

## Int

## Reboot

## Term

Named for the interprocess communication signal “SIGTERM,” as popularized by Unix. Terminates a process, allowing it to perform cleanup operations before exiting.

## Block

## Hijack

## Kill
