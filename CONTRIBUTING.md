
We believe - and we hope you do too - that learning how to code, how to think, and how to contribute to open source can empower the next generation of coders and creators.

You can do it! Here’s how

If you have never contributed to an open source project before and you’re just getting started, consider exploring these resources.

[A Step by Step Guide to Making Your First GitHub Contribution](https://codeburst.io/a-step-by-step-guide-to-making-your-first-github-contribution-5302260a2940)

[How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)


In order to get some insights about Github terminologies consider exploring these resources.

[Collaborating With Issues And Pull Requests](https://help.github.com/categories/collaborating-with-issues-and-pull-requests/)

##

All contributors and maintainers of this project are subject to this code of conduct.

As contributors and maintainers of this project, and in the interest of fostering an open and welcoming community, we pledge to respect all people who contribute to reporting issues, posting feature requests, updating documentation, submitting pull requests or patches, and other activities.


Some guidelines you must have to follow in order to contribute to this repository.

*  Create your **branch**: `git checkout -b my-new-feature`

*  **Commit** your changes: `git commit -m 'Add some feature'`

*  **Push** to the branch: `git push origin my-new-feature`

*  Send a **Pull Request**

*  **Enjoy!**

##

You can contribute to Addy-Smart-Addresses/Addy by opening a Pull Request.

If your are new to git or GitHub, the following articles may help you:

* See "Using Pull Requests":https://help.github.com/articles/using-pull-requests for more information about Pull Requests.

* See <a href="http://help.github.com/forking/">Fork A Repo</a> for an introduction to forking a repository and creating branches.

* See "Refining patches using git":https://github.com/erlang/otp/wiki/Refining-patches-using-git for an introduction to cleaning up git branches.

h2. Setting up user information

Please have git setup with consistent user information before sending a patch. Preferably with your real name and a working email address.

For quick reference, here are the relevant git commands:

<pre>
git config --global user.name "Your Name Comes Here"
git config --global user.email you@yourdomain.example.com
</pre>

h2. Fixing a bug

* In most cases, pull requests for bug fixes should be based on the @maint@ branch. There are exceptions, for example corrections to bugs that have been introduced in the @master@ branch.

* Write a test case *before* fixing the bug (so that you will know that the test case catches the bug). For applications without a test suite in the git repository, it would be appreciated if you provide a small code sample in the commit message or email a module that will provoke the failure.

h2. Adding a new feature

* In most cases, pull requests for new features should be based on the @master@ branch.

* It is important to write a good commit message explaining **why** the feature is needed. We prefer that the information is in the commit message, so that anyone that want to know two years later why a particular feature can easily find out. It does no harm to provide the same information in the pull request (if the pull request consists of a single commit, the commit message will be added to the pull request automatically). See "EEP light":https://github.com/erlang/otp/wiki/EEP-light.

* With few exceptions, it is mandatory to write a new test case that tests the feature. The test case is needed to ensure that the features does not stop working in the future.

* If you are implementing a new feature, also update the [[documentation]] to describe the feature.

* Make sure that the new feature builds and works on all major platforms. Exceptions are features that only makes sense one some platforms, for example the @win32reg@ module for accessing the Windows registry.

* Make sure the patch does not break backward compatibility. In general, we only break backward compatibility in major releases and only for a very good reason and usually after first deprecating the feature one or two releases beforehand.

* In general, language changes/extensions or major updates to Kernel and STDLIB also require an EEP (Erlang Enhancement Proposal) to be written and approved before they can be included in OTP.

h2. Before you submit your pull request

* Make sure existing test cases don't fail. It is not necessary to run all tests (that would take many hours), but you should at least run the tests for the application you have changed. See "Running tests":https://github.com/erlang/otp/wiki/Running-tests.

* Make sure that your branch contains clean commits:
** Follow the guidelines for [[Writing good commit messages]].
** Make separate commits for separate changes. If you cannot describe what the commit does in one sentence, it is probably a mix of changes and should be separated into several commits.
** Don't merge @maint@ or @master@ into your branch. Use @git rebase@ if you need to resolve merge conflicts or include the latest changes.
** To make it possible to use the powerful @git bisect@ command, make sure that each commit can be compiled and that it works.
** Check for unnecessary whitespace before committing with @git diff --check@.

* Check your coding style:
** Make sure your changes follow the coding and indentation style of the code surrounding your changes.
** Do not commit commented-out code or files that are no longer needed. Remove the code or the files.
** In most code (Erlang and C), indentation is 4 steps. Indentation using only spaces is preferred. If you indent using a combination of space and tabs, remember that *tabs are always 8 steps.* (If you use Emacs, use Erlang-mode, and add @(setq c-basic-offset 4)@ to @.emacs@ to get C code correctly indented.)

**Note** : Project maintainers have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct, or to ban temporarily or permanently any contributor for other behaviors that they deem inappropriate, threatening, offensive, or harmful.
