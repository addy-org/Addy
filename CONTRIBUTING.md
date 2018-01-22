## Introduction

You can contribute to *@addy-org* by opening a Pull Request.

If your are new to git or GitHub, the following articles may help you:

* See [Using Pull Requests](https://help.github.com/articles/using-pull-requests) for more information about Pull Requests.

* See [Fork A Repo](https://help.github.com/forking/) for an introduction to forking a repository and creating branches.

* See [Git tutorial](https://addy.wiki/git-tutorial) for better understanding of the concept of git & GitHub

## Setting up user information

Please have git setup with consistent user information before sending a patch. Preferably with your real name and a working email address.

For quick reference, here are the relevant git commands:

```bash
git config --global user.name "Your Name Comes Here"
git config --global user.email you@yourdomain.example.com
```

## Fixing a bug

Write a test case *before* fixing the bug (so that you will know that the test case catches the bug). For applications without a test suite in the git repository, it would be appreciated if you provide a small code sample in the commit message or email a module that will provoke the failure.

## Adding a new feature

* It is important to write a [good commit message](https://addy.wiki/commit-guidelines) explaining **why** the feature is needed. We prefer that the information is in the commit message, so that anyone that want to know two years later why a particular feature can easily find out. *It does no harm to provide the same information in the pull request*.

* With few exceptions, it is mandatory to write a new test case that tests the feature. The test case is needed to ensure that the features does not stop working in the future.

* If you are implementing a new feature, also update the **documentation** to describe the feature.

* Make sure that the new feature builds and works on all major platforms.

* Make sure the patch does not break backward compatibility. In general, we only break backward compatibility in major releases and only for a very good reason and usually after first deprecating the feature one or two releases beforehand.

## Before you submit your pull request

- Make sure existing test cases don't fail. It is not necessary to run all tests (that would take many hours), but you should at least run the tests for the application you have changed.

- Make sure that your branch contains clean commits:
  - Follow the guidelines for [writing good commit messages](https://addy.wiki/commit-guidelines).
  - Make separate commits for separate changes. If you cannot describe what the commit does in one sentence, it is probably a mix of changes and should be separated into several commits.
  - Use `git rebase` if you need to resolve merge conflicts or include the latest changes.
  - Check for unnecessary whitespace before committing with `git diff --check`.

- Check your coding style:
  - Make sure your changes follow the coding and indentation style of the code surrounding your changes.
  - Do not commit commented-out code or files that are no longer needed. Remove the code or the files.
