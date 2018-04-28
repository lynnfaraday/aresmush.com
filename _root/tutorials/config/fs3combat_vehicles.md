---
tags:
- config
title: Configuring FS3 Combat vehicles and mounts.
---
# Configuring FS3 Combat - Vehicles and Mounts

To configure the FS3 Vehicle List:

1. Select Admin -> Setup.
2. Edit `fs3combat_vehicles.yml`

To configure the mounts list:

1. Select Admin -> Setup.
2. Edit `fs3combat_mounts.yml`

## Vehicle Types

You can specify as many different kinds of vehicles as you like.  They each have a number of statistics, explained below:

    Viper:
        description: "Viper space fighter"
        pilot_skill: Piloting
        toughness: 0
        hitloc_chart: Fighter
        armor: Viper
        weapons:
            - Kew
        dodge: 1

### pilot_skill

Pilot skill is used as the defense skill when someone targets the vehicle.

### toughness

A vehicle's toughness gives it a bonus (or penalty, if negative) to the pilot's knockout roll when the vehicle takes damage.

> <i class="fa fa-info-circle"></i> **Tip:** Even a +/-1 can make an impact.  You probably don't want to go beyond +/-3.

### armor

You must specify what armor type (see [Configuring Armor](/tutorials/config/fs3combat_armor)) applies to this vehicle.  Vehicle armor is automatic; you don't use the `combat/armor` command to set it.

### hitloc_chart

You also need to specify what hit location chart (see [Configuring Hit Locations](/tutorials/config/fs3combat_hitloc)) applies when the vehicle takes damage.

### weapons

You can specify what weapons are available on the vehicle.  The first one in the list will be the one selected for pilots/passengers by default.

> <i class="fa fa-info-circle"></i> **Tip:** If a vehicle has multiple configurations (for instance - a BSG Raptor that could have either an air-to-air or air-to-ground loadout) you can either list all weapons and handle it through RP, or break them into separate vehicle types.

### dodge

Nimble or lumbering vehicles may have a bonus (or penalty, if negative) to the pilot's defense roll.

> <i class="fa fa-info-circle"></i> **Tip:** Even a +/-1 can make an impact.  You probably don't want to go beyond +/-3.

## Mount Types

You can specify as many different kinds of vehicles as you like.  They each have a number of statistics, explained below:

    Horse:
        description: "A horse"
        toughness: 4
        umounted_bonus: 1


See **[mounts](http://aresmush.com/fs3/fs3-3/combat-mechanics#mounts)** to understand more about how mounts impact combat.

### toughness

When a mount is hit, they roll this number of dice as a KO roll.  This is the total number of dice, so 4 would reflect an average value.

### unmounted_bonus

This is the attack and defense bonus that the rider has against unmounted opponents.  This is _on top of_ stance mods, so you probably don't want to make it too high.  +1 for regular mounts, +2 for war mounts, +3 maybe for overpowering things like elephants.