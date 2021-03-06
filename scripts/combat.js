// Generated by CoffeeScript 1.12.2
(function() {
  $(document).ready(function() {
      var _page = 1;
      
      var _pages = [
          
          {
              screen:
       `&lt;FS3Combat&gt; Jane has joined the combat as a Soldier.
&lt;FS3Combat&gt; Jane has changed weapons to Pistol. (by Faraday)
&lt;FS3Combat&gt; Jane has changed armor to Tactical. (by Faraday)
              
&lt;FS3Combat&gt; Cylon1 has joined the combat as a Soldier.
&lt;FS3Combat&gt; Cylon1 has changed weapons to Rifle+Ap. (by Faraday)
&lt;FS3Combat&gt; Cylon1 has changed armor to Tactical. (by Faraday)`,
              text: "<p>Welcome to the interactive FS3 combat tutorial.  This will walk you through a sample combat from start to finish and teach you all the basic combat commands.   The black screen above shows you the output just as you'd see in a real combat scene.</p><p>The first thing that happens is that the organizer will add you and other combatants to the combat.  Everyone is assigned a default weapon, armor and sometimes vehicles when they join.  (We'll cover vehicles in a later part of this tutorial.)</p><p>You're Jane in this example.  You've been assigned a Pistol and Tactical armor.  But let's say you've got a Rifle instead.  You'll need to change your weapon.  You can see a list of gear in-game with the <code>weapons</code> and <code>armor</code> command.  There is no code restricting gear; you can choose anything that makes sense ICly.  The organizer has the final say, of course.</p><p>Weapons can also have special accessories.  Let's change our weapon to a rifle with armor piercing (AP) bullets.</p>",
              prompt: "Type <b>combat/weapon Rifle+Ap</b> to change your weapon.",
              expected: "combat/weapon Rifle+Ap"
              
          },
          
          {
              screen:
       `&lt;FS3Combat&gt; Jane has changed weapons to Rifle+Ap.
              
&lt;FS3Combat&gt; Faraday has started a new turn!  Pose and pick your actions.
              
&lt;FS3Combat&gt; Cylon1 will attack Jane.
&lt;FS3Combat&gt; Cylon2 will attack Jane.`,
              text: "<p>Now your weapon is set properly.  In a real combat, you could change your armor too if you needed to.</p><p>The next thing that will happen is that the organizer will trigger a new turn and the NPCs will get some actions.</p>",
              prompt: "Type <b>combat</b> to see what's going on in the combat so you can decide what action to take.",
              expected: "combat"
              
          },
          
          {
          screen: `+==~~~~~====~~~~====~~~~====~~~~=====~~~~=====~~~~====~~~~====~~~~====~~~~~==+
Combat 9                                                  Organized by Faraday
------------------------------------------------------------------------------
Combatant      Damage  Weapon(ammo)                   Action(stance)
-- Team 1 --
Jane           ----    Rifle+Ap (20)                   ---- 
-- Team 2 --
Cylon1         ----    Rifle+Ap (20)                   Attack Jane  
Cylon2         ----    Rifle+Ap (20)                   Attack Jane  
------------------------------------------------------------------------------
Observers
Faraday

Vehicle List

+==~~~~~====~~~~====~~~~====~~~~=====~~~~=====~~~~====~~~~====~~~~====~~~~~==+`,
              text: "<p>This is the combat HUD.  It shows you a summary of the combat.  You can see a list of all the combatants (PCs and NPCs), any damage they've taken, their weapons and actions.  Here we see that Jane is matched up against two Cylons who are both going to attack her.</p><p>Notice how the Cylons and Jane are on different teams.  This is the standard FS3 matchup - PCs and their allies on Team 1 and the bad guys on Team 2.  The organizer can fine-tune team assignments to reflect characters who are in different places.",
              prompt: "Type <b>combat/attack Cylon1</b> to set your action.",
              expected: "combat/attack Cylon1"
              
          },
          
          {
          screen: `&lt;FS3Combat&gt; Jane will attack Cylon1.`,
              text: "<p>You'll see a message confirming your action, and more messages telling you what everyone else is doing.  There are many possible actions in combat - explosions, automatic weapon fire, disarms, first aid, etc.  It'll take some time to learn all the fine points.  A complete list of actions is available in the <a href=\"http://aresmush.com/fs3/fs3-3/combat-quickref/\" target=\"_\">Combat Quick Reference Guide</a>.</p><p>Now that you've entered your action, you need to <b>pose</b> your attempt.  Leave your pose open-ended since you don't know yet if you're going to succeed or fail.  Posing is vitally important to a combat scene.  Rembember this is role-play, not roll-play.</p>",
              prompt: "Type <b>:takes aim.</b> to pose your action.  Normally you should put more effort into your pose but this is just a tutorial :)",
              expected: ":takes aim."
          },
          
          
          {
          screen: `Jane takes aim.
              
&lt;FS3Combat&gt; Starting turn resolution...
&lt;FS3Combat&gt; Jane attacks Cylon1 with Rifle+Ap and HITS!  Impaired wound to Chest. (Reduced by ARMOR)
&lt;FS3Combat&gt; Cylon1 attacks Jane with Rifle+Ap but MISSES!
&lt;FS3Combat&gt; Cylon2 attacks Jane with Rifle+Ap and HITS!  Flesh Wound wound to Right Arm. 
&lt;FS3Combat&gt; Faraday has started a new turn!  Pose and pick your actions.`,
              text: "<p>When everyone has posed and picked their actions, the organizer will trigger the combat resolutions.  You'll see a bunch of messages showing what happened.  Your name will be highlighted, making it easy to pick out things that directly affect you.</p><p>In this round, we see that Jane was slightly injured and hit her target. FS3 does not have an overall count of hit points, but tracks each wound independently.  Wounds are classified as Graze, Flesh Wound, Impaired or Incapacitated.  The more wounds you have, the less combat-effective you become.</p>",
              prompt: "Type <b>combat</b> to take another look at the combat HUD.",
              expected: "combat"
          },
          
          
          {
          screen: `+==~~~~~====~~~~====~~~~====~~~~=====~~~~=====~~~~====~~~~====~~~~====~~~~~==+
Combat 9                                                  Organized by Faraday
------------------------------------------------------------------------------
Combatant      Damage  Weapon(ammo)                   Action(stance)
-- Team 1 --
Jane           X---    Rifle+Ap (19)                   Attack Cylon1  
-- Team 2 --
Cylon1         X---    Rifle+Ap (19)                   Attack Jane  
Cylon2         ----    Rifle+Ap (19)                   Attack Jane  
------------------------------------------------------------------------------
Observers
Faraday

Vehicle List

+==~~~~~====~~~~====~~~~====~~~~=====~~~~=====~~~~====~~~~====~~~~====~~~~~==+`,
              text: "<p>Notice how Jane and Cylon1 both have damage now and everyone's ammo has gone down.  You can refer back to the combat HUD at any time to see what's going on.</p><p>It's a new turn, so you have to pose again, and can change your action if you want.  Your pose can combine the <b>results</b> of last round with your <b>intended action</b> this round.  For example:</p>  <p><i>Jane winces as a bullet creases her arm, her first shot back doing only minor damage to the first Cylon.  Realizing she's in trouble, she flips the rifle to full-auto and unloads on the Cylons.</i></p><p>Because everyone is reacting to the same combat results, there's no need for pose order in FS3 combat.  Everyone can just pose their actions freely, which keeps things moving along quickly.  If somoene says or does something that causes you to change your action, you can always pose again.  That doesn't happen too often, though.",
              prompt: "Type <b>combat/fullauto Cylon1 Cylon2</b> to change your action.",
              expected: "combat/fullauto Cylon1 Cylon2"
          },
                    
          
          {
          screen: `&lt;FS3Combat&gt; Jane will fire full-auto at Cylon1 Cylon2.
              
&lt;FS3Combat&gt; Starting turn resolution...
&lt;FS3Combat&gt; Jane fires full-auto!
&lt;FS3Combat&gt; Jane attacks Cylon1 with Rifle+Ap.  Stopped by ARMOR on Chest.
&lt;FS3Combat&gt; Jane attacks Cylon1 with Rifle+Ap and HITS!  Impaired wound to Chest. (Reduced by ARMOR)
&lt;FS3Combat&gt; Jane attacks Cylon1 with Rifle+Ap and HITS!  Flesh Wound wound to Abdomen. (Reduced by ARMOR)
&lt;FS3Combat&gt; Jane attacks Cylon2 with Rifle+Ap and HITS!  Impaired wound to Chest. 
&lt;FS3Combat&gt; Jane attacks Cylon2 with Rifle+Ap and HITS!  Flesh Wound wound to Chest. (Reduced by ARMOR)
&lt;FS3Combat&gt; Jane attacks Cylon2 with Rifle+Ap and HITS!  Incapacitated wound to Chest. 
&lt;FS3Combat&gt; Cylon2 attacks Jane with Rifle+Ap but MISSES!
&lt;FS3Combat&gt; Cylon1 attacks Jane with Rifle+Ap but Jane EVADES!
&lt;FS3Combat&gt; Cylon1 has been **KO'd**!
&lt;FS3Combat&gt; Cylon2 has been **KO'd**!
&lt;FS3Combat&gt; Faraday has started a new turn!  Pose and pick your actions.
`,
              text: "<p>Jane got lucky.  Both the Cylons were KO'd - knocked out.</p><p>It's important to know that the FS3 combat system can't kill you; the worst that happens is you get knocked out.  This doesn't literally mean unconscious, but just out of the fight somehow.  It's up to you (with the organizer's approval) to figure out what that means.</p><p>Next let's look at how vehicles work.  When you join combat, you may be assigned to a vehicle.  You can also join a vehicle at any time using the combat/pilot or combat/passenger command.  Let's put Jane in a Viper for the next part of the fight.</p>",
              prompt: "Type <b>combat/pilot Viper</b>",
              expected: "combat/pilot Viper"
          },
          
          {
          screen: `&lt;FS3Combat&gt; Jane takes over piloting Viper-D5.
              
+==~~~~~====~~~~====~~~~====~~~~=====~~~~=====~~~~====~~~~====~~~~====~~~~~==+
Combat 9                                                  Organized by Faraday
------------------------------------------------------------------------------
Combatant           Damage    Weapon(ammo)             Action(stance)
-- Team 1 --
Jane                X---      Kew                      ---- 
Jigger              ----      Kew                      ---- (plt)
-- Team 2 --
Raider1             ----      Kew                      ---- (plt)
Raider1             ----      Kew                      ---- (plt)
------------------------------------------------------------------------------
Observers
Faraday
+==~~~~~====~~~~====~~~~====~~~~=====~~~~=====~~~~====~~~~====~~~~====~~~~~==+`,
              text: "<p>Notice how the combat HUD now shows (plt) by Jane's stance.  We've also added some other pilots to the party.  You can use combat/vehicles to see what vehicle everyone is in if you care, but all targeting commands take the name of the pilot, not the name of the vehicle.  When the combat is over, vehicles are recycled.</p><p>For the most part, actions in a vehicle are the same as actions in personal combat.  Attacking with your vehicle weapon still uses the attack command.</p>",
              prompt: "Type <b>combat/attack Raider1</b>",
              expected: "combat/attack Raider1"
          },
          
          {
          screen: `&lt;FS3Combat&gt; Jane will attack Raider1.
&lt;FS3Combat&gt; Jigger will attack Raider1.
&lt;FS3Combat&gt; Raider1 will attack Jane.
              
&lt;FS3Combat&gt; Starting turn resolution...
&lt;FS3Combat&gt; Jane attacks Raider1 with Kew and HITS!  Incapacitated wound to Body. (Reduced by ARMOR)
&lt;FS3Combat&gt; Jigger attacks Raider1 with Kew.  Stopped by ARMOR on Body.
&lt;FS3Combat&gt; Raider2 attacks Jigger with Rifle+Ap and HITS!  Impaired wound to Cockpit. (Reduced by ARMOR)
&lt;FS3Combat&gt; CREW HIT! attacks Jigger with Shrapnel and HITS!  Impaired wound to Right Leg. 
&lt;FS3Combat&gt; Raider1 attacks Jane with Kew and HITS!  Flesh wound to Wing.
&lt;FS3Combat&gt; Raider1 has been **KO'd**!
&lt;FS3Combat&gt; Faraday has started a new turn!  Pose and pick your actions.`,
              text: "<p>Notice how the hit locations are different in vehicle combat.  Jane's Viper was hit in the Wing.  Jigger's Viper was hit in the Cockpit, but because it was a cockpit hit he also took some personal damage to his leg.</p><p>Vehicles are knocked out the same as people.  Again, you are free to interpret that as you see fit - spinning out of control, electrical failure, ejecting, or the pilot actually being knocked out.</p><p>To finish off the combat, let's have Jane go all-out against the Raider by changing her <b>stance</b>.  Stances reflect your general attitude in combat - such as aggressive, defensive, or in cover.  A full list of stances is available in the <a href=\"http://aresmush.com/fs3/fs3-3/combat-quickref/\" target=\"_\">Combat Quick Reference Guide</a>",
              prompt: "Type <b>combat/stance agg</b>",
              expected: "combat/stance agg"
          },
          
          {
          screen: `&lt;FS3Combat&gt; Jane has changed her stance to Aggressive.

&lt;FS3Combat&gt; Starting turn resolution...
&lt;FS3Combat&gt; Jane attacks Raider2 with Kew and HITS!  Impaired wound to Wing. 
&lt;FS3Combat&gt; Raider2 has been **KO'd**!
&lt;FS3Combat&gt; Faraday has stopped the combat.
`,
              text: "<p>That's it!  All the bad guys are knocked out and the combat is over.  Of course, vehicle combat should have poses the same as personal combat; we just glossed over those for the sake of brevity.</p><p>You now know all the basic combat commands necessary to get started.  For more details, check the full <a href=\"http://aresmush.com/fs3/fs3-3/combat\">Combat Player's Guide</a>.</p>",
              prompt: "You're done with the combat walkthrough.  Thank you for playing."
          },

          
      ];
      
      function updatePage() {
          var old_page = $( "div#pageScreen").html();
          var sep = "\n\n~~~~\n\n";
          $( "div#pageScreen").html(old_page + sep + _pages[_page - 1].screen);
          $( "div#pageInstructions").html(_pages[_page - 1].text);
          $( "div#pagePrompt").html(_pages[_page - 1].prompt);
          $( "div#alert").html('');
          scrollToBottom();
         
      };
      
      function scrollToBottom() {
          $('html, body').animate({scrollTop: $(document).height()}, 'slow');  
      };
      
      function handleInput() {
          command = $("#inputBox").val();
          if (!_pages[_page - 1].expected) {
              $( "div#alert").html('All done!');
              scrollToBottom();
          }
          else if (command.toLowerCase() === _pages[_page - 1].expected.toLowerCase() ) {
              _page = _page + 1;
              updatePage();
          }
          else
          {
              $( "div#alert").html('Please enter the indicated command to continue.');
              scrollToBottom();
          }  
      };

      updatePage();

      $( "a#okButton" ).click(function() {
          handleInput();
      });
      
      $('#inputBox').keypress(function(e) {
        if (e.which === 13) {
            handleInput();
          return false;
        }
      });
  });

  return;

}).call(this);
