---
title: Running Tests
description:
layout: page
tags: 
- code
- tests
---

Quite a bit of the standard Ares code comes with unit tests - test code that exercises the main code to ensure it's working properly.  For example, here's a simple test from the FS3 plugin that makes sure the right number of damage "X"s are printed out for the various damage levels:

      describe :print_damage do
        it "should print the right damage" do
          FS3Combat.print_damage(-0).should eq "%xr%xn----"
          FS3Combat.print_damage(-0.25).should eq "%xrX%xn---"
          FS3Combat.print_damage(-1.0).should eq "%xrX%xn---"
          FS3Combat.print_damage(-1.25).should eq "%xrXX%xn--"
          FS3Combat.print_damage(-2.25).should eq "%xrXXX%xn-"
          FS3Combat.print_damage(-3.25).should eq "%xrXXXX%xn"
          FS3Combat.print_damage(-5).should eq "%xrXXXX%xn"
        end
      end

## Running Tests

If you're making code changes, it's a good idea to run the unit tests to make sure you didn't accidentally break anything.  Just log into the server shell and run `bin/test` from the aresmush directory.  You'll see a bunch of spam, and hopefully a success message like this:

    Finished in 0.99797 seconds (files took 2.79 seconds to load)
    1015 examples, 0 failures


## Adding Tests

You can add tests for your own code too.  Instructions for doing that are a bit beyond the scope of this tutorial, but there's lots of good information available at the [RSpec site](http://rspec.info/).