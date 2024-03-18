# Github Squash Merge Preventer

A Chrome Extension that disables the 'Squash And Merge' button on Github Pull Requests for particular target branches

## Why?

This is a very requested feature from Github - This issue is tracking it <https://github.com/orgs/community/discussions/10809>

I've made the mistake too many times, and this might stop me doing it again.

## What does it do?

It's analysing the DOM on the Github Web UI, and setting the `disabled` attribute on the "Squash and Merge' button to `true`. It's going to be brittle, so this is not officially supported, as I have no time for chasing that.

## Help

1. Clone, or fork, the repo. Take a note of where you put it.
2. Navigate to [chrome://extensions](chrome://extensions/) in Google Chrome
3. Select `Load unpacked` Choose the `src` directory from where the repo is cloned
4. Still on the 'Chrome Extensions' page, hit the little 'Jigsaw' icon, navigate to 'Github Squash Merge Preventer/Options'
5. Set the names of the branches you never want to squash merge to.

## This doesn't do what I need

Not my problem. [Chase Github](https://github.com/orgs/community/discussions/10809) to build the feature properly
