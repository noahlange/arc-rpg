# Damage

## Damage Types

Characters can encounter six different forms of damage during gameplay. The three physical damage types are Ballistic (:ballistic:), Melee (:melee:) and Shock (:shock:) and are typically dealt by attacks from people, attacks, and gravity. The three environmental damage types are Energy (:energy:), Thermal (:thermal:) and Toxic (:toxic:), usually found as hazards or natural forces.

| Type                  | Description                             | Sources                                          |
| --------------------- | --------------------------------------- | :----------------------------------------------- |
| :ballistic: Ballistic | High-velocity piercing/slashing damage. | Bullets, shrapnel, fragmentation.                |
| :melee: Melee         | Low-velocity piercing/slashing damage.  | Knives, throwing weapons, teeth and claws.       |
| :shock: Shock         | Explosive or bludgeoning damage.        | Concussion grenades, blunt-force attacks.        |
| :energy: Energy       | Electrical and radiation damage.        | Electricity, radiation, directed-energy weapons. |
| :thermal: Thermal     | Burning and freezing damage.            | Fire, extreme heat and cold.                     |
| :toxic: Toxic         | Chemical or toxic damage.               | Acids, poisons, hazardous chemicals.             |

### Physical damage

Firearms, explosives and melee attacks all deal physical damage.

#### Ballistic

Ballistic damage (:ballistic:) pierces and slashes at high velocity. Bullets and shrapnel from fragmentation grenades are the most common sources of :ballistic:.

#### Melee

Melee damage (:melee:) pierces and slashes, but at a relatively low velocity. Knives are the most commonly-encountered melee weapons. Bite and claw attacks from dogs and vicious animals also inflict :melee:.

### Shock

Bludgeons, fists, shockwaves and blast waves from high explosives inflict Shock damage (:shock:). Damage inflicted by falling and other second-order effects of gravity are also sustained as :shock:.

### Environmental damage

#### Energy

#### Thermal

#### Toxic

# Armor

Most characters expecting to participate in mortal combat will opt for some manner of protective equipment. Anything that offers protection, ranging from heavy clothing to armored exoskeletons, is referred to as armor.

The level of protection offered by armor is represented by one or more die steps ranging from :d4: to :d12:. Most armor will protect against more than one damage type, but few will offer robust protection against all or even most of them. The level of protection offered by armor is the same for every damage type it protects against.

Thick clothing may offer up to :d6: protection. Standard military-issue body armor typically offers :d12: protection. Armor between and :d4: to :d12: can be worn alongside regular clothing without severely limiting range of movement.

Armor between :d12: and :d12: can be acquired with little difficulty but is too cumbersome for everyday wear. While greater protection is available—typically in the form of a full-body armored suit or armor mounted to a powered exoskeleton—it’s incredibly cumbersome and will often prevent the bearer from completing even most mundane tasks.

## Damage Threshold

The sum of a character’s armor steps is their Damage Threshold (DT), or :armor:. Properly-constructed armor can withstand any number of hits below its :armor:. These “absorbed” attacks have no effect on the armor’s integrity or ability to offer protection in the future—if you attack a tank head-on with a 9mm submachine gun, you’re going to run out of bullets long before the tank’s armor gives up and heads home.

## Dealing Damage

When dealing damage, the primary consideration is whether or not the target is armored against the relevant damage type. So long as the target has armor rated against the damage type and the armor has durability steps remaining, they are considered armored.

A successful attack consists of one or more hits. Damage against armor is resolved in hits, direct damage is resolved all at once.

### Armored targets

If the character is armored against incoming damage, small amounts of damage may fail to exceed their armor’s :armor:. If the maximum damage dealt for any given hit is less than or equal to their :armor:, the hit is absorbed and is discarded without a damage roll.

> Example: Boop Bop is slashed three times at 2d4 :melee:. Because the maximum damage roll for any given hit (8) is less than his :armor:, every hit is absorbed and no damage is rolled.

If the maximum damage for any given hit exceeds the sum of the character’s armor steps, damage is rolled and compared to :armor:. The damage dealt by each hit is summed separately.

> Example: Boop Bop (d6 vs. :ballistic:) is dealt three hits of 3d6 :ballistic:. Because the maximum damage roll (18) is greater than his :armor:, damage is dealt by each hit in sequence.

If the damage for any given hit exceeds DT, the armor is damaged and begins to lose integrity. Their lowest armor die step drops by 1.

> Example: Boop Bop’s attacker rolls 3d6 three times—4, 15, 9. The first hit is absorbed and dropped. The second hit exceeds his :armor: and reduces it by one step, from :d6: to :d4:.

If the next hit exceeds the new :armor:, it drops again. Once the last armor die reaches :d4: and is dropped, the armor is broken and no longer offers protection against any damage. With a new :armor: of :d4:, a third hit at 6 penetrates, where before it would have been absorbed. The final die is dropped, leaving him unarmored.

### Unarmored targets

If a character is not protected against incoming damage, the sum of all damage dealt in a single attack can be rolled and subtracted from their :health: all at once, even if spread across multiple hits. Beep Boop has armor that offers  :armor: against  and . but none against :ballistic:. Three hits of 2d4 :ballistic: can be rolled as 6d4 and subtracted directly from Boop Bop’s :health:.

### Massive damage

High amounts of damage against weak or damaged armor may immediately render it ineffective. If a target sustains damage greater than or equal to 2× :armor: in a single hit, their armor fails entirely. The value of their :armor: is subtracted from the damage, but the armor is destroyed and remaining damage passes to HP.

> Bobby Bobertson (18 :health:, 6 :armor:) takes 3d8 damage, for a total of 14. This exceeds 2×DT (12 :armor:), and the armor fails. The shot inflicts 14-6=8 damage. His :health: is reduced to 10 and is now unprotected against later attacks.

Any attack that inflicts damage meeting or exceeding a character’s maximum :health: is immediately fatal. Even characters at full health with high :armor: can fall victim to particularly powerful weapons or sources of damage.

> Boop Bop (18 :health:, 20 :armor: vs. :ballistic:) takes a solid hit from a .50 caliber machine gun (5d12 :ballistic:). The shot inflicts 45 points of damage. His 20 :armor: reduces the total damage incurred from 45 to 25, but because the remaining damage exceeds his maximum :health:, he’s killed instantly.

## Taking Damage

Even inevitably-fatal wounds may not instantly render an opponent unconscious. If a character has sustained a wound that reduces their :health: below 0, they're still able to finish their turn before succumbing.

### Wounds

Characters that sustain physical damage to HP acquires a wound. Every unarmored or penetrating hit adds one step to their wound die (ranging from -). When a character’s wound die has reached  and they suffer an additional hit, they acquire a second a second wound die, starting at . At the end of each turn, wound dice are rolled, summed and subtracted from . Unlike regular damage, wound damage is recurring and will continue until the victim dies or the wound receives medical attention. Some weapons are particularly effective at imparting wound damage and may add multiple wound steps.

#### Staunching

Characters equipped with an ad hoc field dressing or proper medical implement (medhypo, bloodfoam, &c.) may perform a Medicine (Heal) check to “staunch” a wound and remove a wound die. A successful check that exceeds the step of the wound die (i.e., the TN) staunches the wound; the die is removed and is effectively “cured”, at least for the time being.

# Aid & Healing

After taking damage, there are few options for emergency first aid in the field. While traditional field dressings remain the most common and affordable option for treating combat wounds, fast-acting medhypos and bloodfoam have become increasingly popular, albeit pricey, choices. Different types of aid require different methods of application, have different durations and impart different effects.

## Aid

### Application

The application of traditional first aid—bandages, tourniquets and standard med kits—requires different combinations of equipment, skill and time: a bandage cannot be applied in the absence of a bandage, time to use it or the ability to use it effectively.

The largest benefit of injectable aid items are their speed of action and user-friendliness. A variety of medhypos and bloodfoam products can restore HP and staunch wounds without significant demands on the skill or concentration of the applicator.

### Persistence

The effects of most aid items are persistent, positive effects lasting beyond the duration of application. A tourniquet will continue staunching a wound long after being tied—but if you’re simply applying pressure to a wound, negative effects will resume as soon as pressure is released.

### Effects

#### Health

Given that a character’s health directly corresponds to their ability to continue fighting, the ability to restore it is a valuable trait—independently of its long-term efficacy or duration. Medhypos and medkits will restore health upon application.

#### Wounds

Bleeding wounds are insidious, and may kill a combatant long after their foes are defeated. Bandages (including tourniquets) and bloodfoam will help heal wounds, removing one or more wound dice, without restoring health. Manually applying pressure to a wound will temporarily pause a single wound die, which will be reapplied immediately after pressure ceases. Multiple wound dice can be paused, but each wound requires an additional assistant. Medkits may remove wound dice and increase health, but require time to be applied—if interrupted, any effects that would otherwise persist are lost.

#### Toxicity

Medhypos and other injectables have advantages in simplicity and speed, but also increase blood toxicity. Blood toxicity can have lingering negative effects and requires expensive equipment or medical intervention to reduce—first aid offers the benefits of an injectable in a safe and sustainable fashion.

## Types

### Medhypo

The first medhypos were employed by military forces. In some cases they were intended to help stabilize wounded soldiers, and in others they were used as an inexpensive, simple strategy for pumping soldiers full of drugs before sending them out in a human wave attack. The average medhypo contains a cocktail of antiseptic, antibacterial and antiviral chemicals, alongside several compounds to stimulate platelet production, promote alertness and temporary relieve severe pain.

These powerful and fast-acting medhypos come with side effects of their own, and forced acceleration of various parts of the healing process often leads to heightened levels of toxic byproducts circulating through the bloodstream—effects considered desirable for stabilizing patients with deep tissue wounds and heavy blood loss are often counterproductive when attempting to stimulate natural healing processes. While a hospital-grade blood detoxifier can easily clear all of these byproducts, too many drugs in too little time can prove detrimental or fatal in and of themselves. Medhypos restore :health:, but cannot heal wounds.

### Bloodfoam

Bloodfoam is a liquid substance that rapidly expands and hardens upon contact to oxygen. As its name suggests, Bloodfoam can heal wounds, but cannot restore lost health. Like medhypos, the use of bloodfoam contributes to blood toxicity levels.

### Bandage

Traditional field dressings—bandages and tourniquets—take longer to apply in combat than a medhypo, but don’t contribute to blood toxicity.

### Pressure

The oldest, easiest and least effective way to staunch a wound is to apply significant pressure, pinching off blood vessels and arteries that would otherwise be leaking. While it requires no equipment, training or prep time, its benefits are limited and immediately cease once the person applying pressure breaks concentration.

### Medpack

“Medpack” is a catch-all term used to describe varied collections of instruments, dressings, medicines and poultrices, acquired and stored in self-contained boxes (or packs). Medpacks are inherently expendable—once a medpack has been opened and used, its contents must be promptly discarded at the risk of infection, blood-borne pathogens or other maladies.
