---
title: Coding for Ares
description:
layout: page
---

These articles will teach you how to code for AresMUSH.   

{{>tutorial_warning}}

## Introduction

* [Ares Architecture](/tutorials/code/architecture) - All the moving parts that make up an Ares game.
* [Coding for Ares](/tutorials/code/overview) - General overview of how coding for Ares works.

## Basic Coding Tutorials

There are three tutorials designed to introduce you to Ares coding step by step.  It's recommended that you do these in order, since they all build on each other.

### Tutorial #1 - Quickstart

Learn the basic Ares functions and code concepts.

<button data-toggle="collapse" data-target="#quickstart" class="btn btn-info">Show Tutorial</button>

<div id="quickstart" class="collapse">
{{>quickstart_tutorial}}
</div>

### Tutorial #2 - Editing Ares Code

Learn what tools you use to edit the Ares code.

<button data-toggle="collapse" data-target="#edit-code" class="btn btn-info">Show Tutorial</button>

<div id="edit-code" class="collapse">
{{>edit_code_tutorial}}
</div>

### Tutorial #3 - Adding a Command (Character Goals)

Learn how to add a command (a simple 'goals' command to set character goals.)

<button data-toggle="collapse" data-target="#add-cmd" class="btn btn-info">Show Tutorial</button>

<div id="add-cmd" class="collapse">
{{>add_command_tutorial}}
</div>

### Tutorial #4 - Creating a Plugin (Cortex Skills System)

Learn the anatomy of a more complex system (aka a plugin) from start to finish.  The example uses the Cortex skills system.

<button data-toggle="collapse" data-target="#create-plugin" class="btn btn-info">Show Tutorial</button>

<div id="create-plugin" class="collapse">
{{>create_plugin_tutorial}}
</div>

## Advanced Coding Topics

Once you've completed the initial tutorials, there are a wealth of other topics available for reference. 

> <i class="fa fa-info-circle"></i> **Tip:** It's suggested that you refer to these as you need them rather than trying to learn them all at once.  There's a lot of information here and it can be a bit overwhelming.

### General

* [Basic Concepts](/tutorials/code/concepts)
* [Tinkering](/tutorials/code/tinker)
* [Using Formatting Codes](/tutorials/code/formatting)
* [Using Log Files](/tutorials/code/logs)

### Language Resources

* [Learning Ruby](/tutorials/code/ruby)
* [Learning EmberJS](/tutorials/code/ember)

### Configuration

* [Enabling and Disabling Plugins](/tutorials/config/plugins)
* [Understanding YAML](/tutorials/code/yaml)
* [Troubleshooting YAML](/tutorials/code/troubleshooting-yaml)
* [Shortcuts](/tutorials/code/shortcuts)

### Engine

* [Engine Ports](/tutorials/code/ports)
* [Engine Globals](/tutorials/code/globals)
* [Client Monitor](/tutorials/code/client-monitor)
* [Config Reader](/tutorials/code/config-reader)
* [Cron Jobs](/tutorials/code/cron)
* [Help System](/tutorials/code/help)
* [Localization](/tutorials/code/localization)
* [Notifications](/tutorials/code/notifications)
* [Dispatcher](/tutorials/code/dispatcher)

### Database

* [Database](/tutorials/code/database)
* [Editing the Database](/tutorials/code/edit-database)
* [Removing a Database Field](/tutorials/code/remove-field)
* [Database Migrations](/tutorials/code/db-imgration)

### Plugins and Commands

* [Plugins](/tutorials/code/plugins)
* [Command Handling](/tutorials/code/commands)
* [Arg Parsers](/tutorials/code/arg-parsers)
* [Error Checkers](/tutorials/code/error-checkers)
* [Event Handling](/tutorials/code/events)
* [Web Request Handling](/tutorials/code/web-requests)
* [Custom Code](/tutorials/code/custom)
* [Reloading Code](/tutorials/code/reload)

### Utilities

* [Emitting](/tutorials/code/emitting)
* [Formatters](/tutorials/code/formatters)
* [Templates](/tutorials/code/templates)

### Web Portal

* [Web Portal Overview](/tutorials/code/web-portal)
* [Web Portal Routes](/tutorials/code/web-routes)
* [Web Portal Templates](/tutorials/code/web-templates)
* [Web Portal Controllers](/tutorials/code/web-controllers)
* [Web Portal Services](/tutorials/code/web-services)
* [Web Portal Mixins](/tutorials/code/web-mixins)
* [Game Api](/tutorials/code/web-game-api)
* [Web Request Handling](/tutorials/code/web-requests)
* [Navigation](/tutorials/code/web-nav)
* [Wiki Extensions](/tutorials/code/wiki-extensions)

### Troubleshooting

* [Troubleshooting Issues](/tutorials/code/troubleshooting)

## FS3

* [FS3 Code Roadmap](/tutorials/code/fs3-roadmap) - Overview of the FS3 code.
* [Replacing FS3](/tutorials/code/replacing-fs3) - Replacing FS3 with your own skills system.

## Extras/Contributions

* [Extras](/tutorials/code/extras) - Using community plugins and code snippets.
* [Submitting Contributions](/tutorials/code/extra-contribs) - Submitting extras.

## Miscellaneous

* [Chopping Block](/tutorials/code/chopping-block) - Code that didn't make the cut.
* [Using Git](/tutorials/code/git) - Using the GitHub version control system to manage your code.
* [Setting up a Development System](/tutorials/code/dev-tools) - Setting up a system to code and test.
* [Running Tests](/tutorials/code/tests) - Running the automated unit tests.
