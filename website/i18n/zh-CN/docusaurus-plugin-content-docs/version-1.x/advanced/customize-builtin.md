---
title: 自定义内置数据
sidebar_label: 自定义内置数据
---

# 内置服务（BuiltinService)

如上所示，在 Molecule 中有需要内置的命令和方法。但是如果用户不想要某个功能，那么他/她应该如何去禁用这个功能呢？

答案是通过 `builtin` 服务。Molecule 将所有的内置命令和方法都搜集入 `builtin` 服务，然后将其分发到其他的服务中去注册。

所以，如果你想要禁用某一个内置的命令或功能，只需要使用 `builtin` 服务。更多关于如何使用 `builtin` 服务的信息，请参考[扩展内置](extends-builtin)。
