---
title: this is a test post
date: 2020-03-19T17:00:45.124Z
published: true
tags:
  - test
description: this is a test
---
lorem isum

<!--StartFragment-->

## [\#](https://gridsome.org/docs/querying-data/#querying-collections)Querying collections

You will notice that some of the root fields in your schema are prefixed with`all`. Use them to get lists of nodes in a collection.

| Argument    | Default  | Description                                                               |
| ----------- | -------- | ------------------------------------------------------------------------- |
| **sortBy**  | `"date"` | Sort by a node field.                                                     |
| **order**   | `DESC`   | Sort order (`DESC`or`ASC`).                                               |
| **sort**    |          | Sort by multiple node fields.                                             |
| **skip**    | `0`      | How many nodes to skip.                                                   |
| **limit**   |          | How many nodes to get.                                                    |
| **page**    |          | Which page to get.                                                        |
| **perPage** |          | How many nodes to show per page. Omitted if no`page`argument is provided. |
| **filter**  | `{}`     | [Read more](https://gridsome.org/docs/filtering-data/).                   |

<!--EndFragment-->