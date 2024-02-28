# Combat

Combat is a thing.

## Icons

## Combat sequence

1. Determine which side, if any, has the element of surprise.
2. Roll initiative—AGI ×2 vs. TN :d20:. Before rolling, players can appeal the DM with a relevant justification and, if successful, swap out one AGI for another stat of their choice.
3. Characters who succeed take turns in ascending DoS/failures descending DoS.
4. Each character receives action points for their turn, equal to their :speed:.
5. When given initiative, each character takes their turn by spending AP. They can move, make attacks or perform any other combat actions. Upon starting their turn, players can choose to ‘hold’ until a specific later place in initiative order.
   - Characters can react to other rolls by spending AP from their current turn, or by spending :speed: if they have no remaining AP.
6. Once all combatants have acted:
   1. roll :wound: dice, subtract from :health:
   2. characters at or below 0 :health: fall unconscious, at or below -CON die.
7. The next turn begins from the start of initiative order. Initiative is not re-rolled.

## Order of attack

1. Pick a relevant weapon skill and roll :d20: vs. TN, optionally adding a focus bonus and accuracy penalties/bonuses. A roll of 1 is an automatic hit. A roll of 20 is an automatic failure. A failed check ends the current action.
   - If the attack roll meets or exceeds the first number of a weapon’s :failure:, a jam (though not necessarily a miss) is threatened. Roll d20 again; if you meet or succeed the second number, your weapon jams and must be cleared before making another ranged attack.
2. If the target of the attack is aware of danger and chooses to do so, they may spend 1 AP to perform an Evade (React) skill check. If the defender’s skill check is successful and their degree of success meets or exceeds the attacker’s, the attack misses. Otherwise, the attack is successful.
3. If the attack is successful, determine the attack’s degree (º) using its weapon’s :spread:. The lower of that and its weapon's :rof: determines the number of hits on target.
4. If the target is armored and their armor protects against the attack's damage type, roll each hit sequentially. All hits that deal less damage than sum of the target’s :armor: deal no damage. Each hit that exceeds that sum reduces the highest remaining :armor: step by 1, until no hits remain or the last :armor: die is dropped.
5. If unarmored, without relevant armor coverage or after the last :armor: has been dropped, any remaining hits are subtracted directly from the target’s :health:.
6. Each hit to HP adds a wound die between :d4: and :d12:, the step corresponds to the damage sustained (e.g., 1-4 adds :d4:, 5-6 adds :d6:, 12+ adds :d12:).
7. If attack damage exceeds their maximum :health:, the target dies immediately.
