# Compatibility with EBI-VF 1.x Component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fembl-compatibility-ebivf.svg)](https://badge.fury.io/js/%40visual-framework%2Fembl-compatibility-ebivf)

This adds fixes, compatibility and workarounds for sites that use the EBI VF versions 1.1, 1.2 or 1.3.

Enable it's use by:

a. `body class="embl-compatibility-ebivf"`, or
b. wrapping a section of html with the class `.embl-compatibility-ebivf`

## Install

This repository is distributed with [npm][npm]. After [installing npm][install-npm], you can install `embl-compatibility-ebivf` with this command.

```
$ yarn add --dev @visual-framework/embl-compatibility-ebivf
```

## Usage

The source files included are written in [Sass][sass] (`scss`) You can simply point your sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/embl-compatibility-ebivf/index.scss";
```

_Make sure you import any requirements along with the modules._
