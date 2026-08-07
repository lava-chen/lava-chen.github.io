---
title: 欢迎来到我的博客
date: 2026-08-07
tags: [hello, blog]
summary: 博客功能已恢复，这是一篇示例文章，演示 Markdown 排版与数学公式。
---

这里是博客正文。当我们在研究物理约束深度学习时，常会用到如下的公式：

$$
\mathcal{L} = \mathcal{L}_{data} + \lambda \, \mathcal{L}_{physics}
$$

除了行间公式，还有行内公式 $x \in \mathbb{R}^n$。仓库支持 GFM，因此可以写表格：

| 特征 | 说明 |
| --- | --- |
| 物理约束 | 由 PDE 残差定义的损失项 |
| 数据驱动 | 由观测数据定义的损失项 |

以及代码块：

```python
def loss(data_loss, physics_loss, lam=0.1):
    return data_loss + lam * physics_loss
```

> 这是一条引用。示例文章可直接删除，或作为新文章的模板。