# 1.Intlist
建立一个列表数据结构
```java
public class IntList{
	public int first;
	public IntList rest;
	public IntList(int f,IntList r){
		first = f;
		rest = r;
	}
} 
```
这是一类似链表的结构。
1. 构造size方法
```java
public int size(){
	if (rest == null){
		return 1;
	}
	return 1 + this.rest.size();
}
```
2. iterativeSize()迭代的
```java
public int iterative(){
	IntList p =this;
	int totalSize = 0;
	while(p!=null){
		totalSize +=1;
		p = p.rest;
	}
	return totalSize;
}
````
3. 返回第i个元素的方法get()
```java
public int get(int i){
	if(i==0){
		return first;
	} 
	while(i!=0){
		i-=1;
		return this.intList.get(i)
	}
}
```
# 2.SLLists
1. 第一步，简单地重命名所有内容并丢弃辅助方法
```java
public class IntNode {
	public int item;
	public IntNode next;
	
	public IntNode(int i, IntNode n) {
		item = i;
		next = n;
	}
}
```
2. 创建一个单独的类，供`SLList`用户交互,大体就是不用自己输入null了(本质意义是充当中间人，让我们一直处于链表的首部)
```java
public class SLList {
	public IntNode first;
	
	public SLList(int x) {
		first = new IntNode(x, null);
	}
}
```
3. addFirst()和getFirst()
```java
public class SLList {
    public IntNode first;
    public SLList(int x) {
        first = new IntNode(x, null);
    }
    /** Adds an item to the front of the list. */
    public void addFirst(int x) {
        first = new IntNode(x, first);
    }
    /** Retrieves the front item from the list. */
	public int getFirst() {
	    return first.item;
	}
}
```
![[笔记-20240904221616343.webp|400]]
IntList和SLList的对比
4. 可能发生的错误：让列表指向自己
```java
SLList L = new SLList(15);
L.addFirst(10);
L.first.next.next = L.first.next;
```
![[笔记-20240904222237763.webp]]
5. 解决方法，让first成为private
```java
public class SLList{
	private IntNode first;
	...
}
```
6. 将IntNode嵌套在SLList中,并改成静态方法
```java
public class SLList {
       public static class IntNode {
            public int item;
            public IntNode next;
            public IntNode(int i, IntNode n) {
                item = i;
                next = n;
            }
       }

       private IntNode first; 

       public SLList(int x) {
           first = new IntNode(x, null);
       } 
...
```
7. addLast()和size()
```java
/** Adds an item to the end of the list. */
public void addLast(int x) {
    IntNode p = first;

    /* Advance p to the end of the list. */
    while (p.next != null) {
        p = p.next;
    }
    p.next = new IntNode(x, null);
}
/** Returns the size of the list starting at IntNode p. */
private static int size(IntNode p) {
    if (p.next == null) {
        return 1;
    }

    return 1 + size(p.next);
}
public int size() {
    return size(first);
}
```
这里我们有两个方法，名字都为`size`。这在 Java 中是允许的，因为它们有不同的参数。我们说两个同名但签名不同的方法是**重载的**。有关重载方法的更多信息，请参阅 Java 的[官方文档](https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html)。
8. 缓存
考虑一下`size`我们上面写的方法。假设`size`在大小为 1,000 的列表中需要 2 秒。我们预计在大小为 1,000,000 的列表中，该`size`方法将花费 2,000 秒，因为计算机必须遍历列表中 1,000 倍的项目才能到达末尾。`size`对于大型列表，使用非常慢的方法是不能接受的，因为我们可以做得更好。

可以进行重写`size`，以便无论列表有多大，都花费相同的时间。

为此，我们只需向类`size`中添加一个跟踪当前大小的变量`SLList`，即可得到下面的代码。这种保存重要数据以加快检索速度的做法有时称为**缓存**。
```java
public class SLList {
    ... /* IntNode declaration omitted. */
    private IntNode first;
    private int size;

    public SLList(int x) {
        first = new IntNode(x, null);
        size = 1;
    }

    public void addFirst(int x) {
        first = new IntNode(x, first);
        size += 1;
    }

    public int size() {
        return size;
    }
    ...
}
```
9. 空列表
```java
public SLList(){
	first = null;
	size = 0;
}
```
这会导致addLast()方法崩溃，因为`p.next!=null`会报错，这导致我们需要修复此方法
10. 修复`addLast`
```java
public void addLast(int x) {
    size += 1;

    if (first == null) {
        first = new IntNode(x, null);
        return;
    }

    IntNode p = first;
    while (p.next != null) {
        p = p.next;
    }

    p.next = new IntNode(x, null);
}
```
这个方法将特殊情况列出，并不是很好的解决方案，接下来我们用一种新的方法
11. Sentinel Nodes(哨兵节点)
![[笔记-20240905141420346.webp|603]]
一个更简洁但不太明显的解决方案是让所有节点`SLLists`都“相同”，即使它们是空的。我们可以通过创建一个始终存在的特殊节点来实现这一点，我们将其称为**哨兵节点**。哨兵节点将保存一个我们不关心的值。
```java
public void addLast(int x) {
    size += 1;
    IntNode p = sentinel;
    while (p.next != null) {
        p = p.next;
    }

    p.next = new IntNode(x, null);
}
```
# DDL列表
1. 上面`addLast`的方法的问题在于速度太慢了，所以添加一个变量
	```java
	public class SLList {
    private IntNode sentinel;
    private IntNode last;
    private int size;    

    public void addLast(int x) {
        last.next = new IntNode(x, null);
        last = last.next;
        size += 1;
    }
    ...
}
```
2. 结构的问题在于，删除列表中最后一个项目的方法本质上会很慢。解决这个问题最自然的方法是向每个添加一个前一个指针`IntNode`，即
```java
public class IntNode {
    public IntNode prev;
    public int item;
    public IntNode next;
}
```
![[笔记-20240910162108358.webp|437]]
![[笔记-20240910162115841.webp|458]]
3. Sentinel Nodes(哨兵节点)升级
4. 通用的列表
```java
public class DLList<BleepBlorp> {
    private IntNode sentinel;
    private int size;

    public class IntNode {
        public IntNode prev;
        public BleepBlorp item;
        public IntNode next;
        ...
    }
    ...
}
```
**泛型的使用**
# 数组
---
用数组建立列表
## 数组的建立
1. `x = new int[3];`
2. `y = new int[]{1 ,2 ,3 ,4 ,5};`
3. `int[] z = {9, 10, 11, 12, 13};`
4. `System.arraycopy(b, 0,x, 3, 2)`相当于Python 中的`x[3:5] = b[0:2]`
5. [一些实例](https://cscircles.cemc.uwaterloo.ca/java_visualize/#)
# 测试
但是，这将产生编译错误“< 不能应用于 'java.lang.String'”。问题是 Java 不允许使用 < 运算符在字符串之间进行比较。

当你在编程时遇到这种很容易描述的问题时，最好求助于搜索引擎。例如，我们可以用 Google 搜索“Java 小于字符串”。这样的搜索可能会产生类似[这样的](https://stackoverflow.com/questions/5153496/how-can-i-compare-two-strings-in-java-and-define-which-of-them-is-smaller-than-t)Stack Overflow 帖子。

这篇文章的一个热门答案解释说，`str1.compareTo(str2)`如果 ，该方法将返回负数`str1 < str2`，如果它们相等，则返回 0，如果 ，则返回正数`str1 > str2`。

将其合并到我们的代码中，我们最终可能会得到：

```
/** Returns the smallest string in x. 
  * @source Got help with string compares from https://goo.gl/a7yBU5. */
public static String findSmallest(String[] x) {
    String smallest = x[0];
    for (int i = 0; i < x.length; i += 1) {
        int cmp = x[i].compareTo(smallest);
        if (cmp < 0) {
            smallest = x[i];
        }
    }
    return smallest;
}
```

请注意，我们使用标签`@source`来引用我们的资料来源。我通过示例向那些正在学习 61B 作为正式课程的人展示这一点。这不是典型的现实世界做法。
# 8. ArrayList

在本节中，我们将构建一个名为 的新类`AList`，它可用于存储任意长的数据列表，类似于我们的`DLList`。与 不同`DLList`，`AList`将使用数组而不是链接列表来存储数据。

#### 

[](https://cs61b-2.gitbook.io/cs61b-textbook/8.-arraylist#linked-list-performance-puzzle)

链表性能难题

假设我们想为 编写一个新方法，`DLList`称为`int get(int i)`。为什么`get`相比 ，长列表时 会比较慢`getLast`？对于哪些输入，它会特别慢？

你可能会发现下面的图对于思考你的答案很有帮助。

![](https://cs61b-2.gitbook.io/~gitbook/image?url=https%3A%2F%2Fjoshhug.gitbooks.io%2Fhug61b%2Fcontent%2Fchap2%2Ffig23%2Fdllist_circular_sentinel_size_2.png&width=768&dpr=4&quality=100&sign=2a55a813&sv=1)

dllist_circular_sentinel_size_2.png

#### 

[](https://cs61b-2.gitbook.io/cs61b-textbook/8.-arraylist#linked-list-performance-puzzle-solution)

链表性能难题解决方案

事实证明，无论你多么聪明，该方法通常都会比使用 2.3 节中描述的双向链表结构`get`要慢。`getBack`

这是因为，由于我们只引用了列表的第一个和最后一个项目，所以我们总是需要从前面或后面遍历列表才能找到我们试图检索的项目。例如，如果我们想在长度为 10,000 的列表中获取项目 # 417，我们将不得不遍历 417 个前向链接才能找到我们想要的项目。

在最坏的情况下，该项目位于正中间，我们需要遍历与列表长度成比例的项目数（具体来说，项目数除以二）。换句话说，我们的最坏情况执行时间与`get`整个列表的大小成线性关系。这与 的运行时间形成对比`getBack`，无论列表大小如何，它的运行时间都是恒定的。在课程的后面，我们将根据大 O 和大 Theta 符号正式定义运行时间。现在，我们将坚持非正式的理解。

#### 

[](https://cs61b-2.gitbook.io/cs61b-textbook/8.-arraylist#our-first-attempt-the-naive-array-based-list)

我们的第一次尝试：基于数组的简单列表

在现代计算机上，访问`i`数组的第 th 个元素需要花费常数时间。这表明基于数组的列表的性能要比基于`get`链接列表的解决方案好得多，因为它可以简单地使用括号符号来获取感兴趣的项。

如果你想知道**为什么**数组具有恒定时间访问，请查看此[Quora 帖子](https://www.quora.com/Why-does-accessing-an-array-element-take-constant-time)。

**可选练习 2.5.1：**尝试构建一个支持`addLast`、`getLast`、`get`和`size`操作的 AList 类。您的 AList 应该适用于最多 100 个大小的数组。有关入门代码，请参阅[https://github.com/Berkeley-CS61B/lectureCode/tree/master/lists4/DIY](https://github.com/Berkeley-CS61B/lectureCode/tree/master/lists4/DIY)。

[我的解决方案](https://github.com/Berkeley-CS61B/lectureCode/tree/master/lists4/naive)具有以下方便的不变量。

- 下一个要插入的项目的位置（使用`addLast`）始终是`size`。
    
- AList 中的项目数始终为`size`。
    
- 列表中最后一项的位置始终是`size - 1`。
    

其他解决方案可能略有不同。

#### 

[](https://cs61b-2.gitbook.io/cs61b-textbook/8.-arraylist#removelast)

移除最后一个

我们需要支持的最后一个操作是`removeLast`。在开始之前，我们做出以下关键观察：对我们的列表的任何更改都必须反映在我们的实现中的一个或多个内存盒的更改中。

这似乎很明显，但其中却有深刻的含义。列表是一个抽象的概念，而`size`、`items`和`items[i]`记忆盒是该概念的具体表示。用户尝试使用我们提供的抽象概念（`addLast`、`removeLast`）对列表进行的任何更改都必须以符合用户期望的方式反映在这些记忆盒的某些更改中。我们的不变量为我们提供了这些更改应该是什么样子的指南。

**可选练习 2.5.2：**尝试编写`removeLast`。在开始之前，确定`size`、`items`和 中的哪些`items[i]`需要更改，以便在操作后保留我们的不变量，即，以便将来对我们的方法的调用为列表类的用户提供他们期望的行为。

#### 

[](https://cs61b-2.gitbook.io/cs61b-textbook/8.-arraylist#naive-resizing-arrays)

简单调整数组大小

**可选练习 2.5.3：**假设我们有一个 AList，其状态如下图所示。如果我们调用 ，会发生什么`addLast(11)`？我们应该如何处理这个问题？

![](https://cs61b-2.gitbook.io/~gitbook/image?url=https%3A%2F%2Fjoshhug.gitbooks.io%2Fhug61b%2Fcontent%2Fchap2%2Ffig25%2Ffull_naive_alist.png&width=768&dpr=4&quality=100&sign=4c052c76&sv=1)

dllist_circular_sentinel_size_2.png

在 Java 中，答案是，我们只需构建一个足够大的新数组来容纳新数据。例如，我们可以想象按如下方式添加新项目：

复制

```
int[] a = new int[size + 1];
System.arraycopy(items, 0, a, 0, size);
a[size] = 11;
items = a;
size = size + 1;
```

创建新数组并复制项目的过程通常称为“调整大小”。这个名称有点不正确，因为数组实际上并没有改变大小，我们只是创建一个更大的**新数组。**

**练习 2.5.4：**尝试实现`addLast(int i)`调整数组大小的方法。

#### 

[](https://cs61b-2.gitbook.io/cs61b-textbook/8.-arraylist#analyzing-the-naive-resizing-array)

分析简单的调整数组大小方法

我们在上一节中尝试的方法性能很差。通过运行一个简单的计算实验，我们调用了`addLast`100,000 次，我们发现`SLList`完成速度非常快，甚至无法计时。相比之下，我们的基于数组的列表需要几秒钟。

要理解原因，请考虑以下练习：

**练习 2.5.5：**假设我们有一个大小为 100 的数组。如果我们调用 insertBack 两次，在整个过程中我们需要创建和填充总共多少个框？假设在数组的最后一个引用丢失后立即进行垃圾收集，我们一次总共会有多少个框？

**练习 2.5.6：**从大小为 100 的数组开始，如果调用`addLast`1,000 次，大约会创建和填充多少个内存盒？

创建所有这些内存盒并重新复制其内容需要时间。在下图中，我们在顶部绘制了 SLList 的总时间与操作数，在底部绘制了基于简单数组的列表的总时间与操作数。SLList 显示一条直线，这意味着对于每个`add`操作，列表需要相同的额外时间。这意味着每个单个操作都需要恒定的时间！您也可以这样想：图形是线性的，表示每个操作都需要恒定的时间，因为常数的积分是一条线。

相比之下，简单的数组列表呈现抛物线，表明每个操作都需要线性时间，因为直线的积分是抛物线。这具有重大的现实意义。对于插入 100,000 个项目，我们可以通过计算 N^2/N 的比率来粗略计算需要多长时间。将 100,000 个项目插入基于数组的列表需要 (100,000^2)/100,000 或 100,000 倍的时间。这显然是不可接受的。

![](https://cs61b-2.gitbook.io/~gitbook/image?url=https%3A%2F%2Fjoshhug.gitbooks.io%2Fhug61b%2Fcontent%2Fchap2%2Ffig25%2Finsert_experiment.png&width=768&dpr=4&quality=100&sign=5ca14960&sv=1)

图25/插入实验.png

#### 

[](https://cs61b-2.gitbook.io/cs61b-textbook/8.-arraylist#geometric-resizing)

几何尺寸调整

我们可以通过以乘法量而不是加法量增加数组的大小来解决性能问题。也就是说，不是**添加**等于某个调整大小因子的内存盒数量`RFACTOR`：

复制

```
public void insertBack(int x) {
    if (size == items.length) {
           resize(size + RFACTOR);
    }
    items[size] = x;
    size += 1;
}
```

我们通过将盒子的数量**乘**`RFACTOR`以来调整大小。

复制

```
public void insertBack(int x) {
    if (size == items.length) {
           resize(size * RFACTOR);
    }
    items[size] = x;
    size += 1;
}
```

重复我们之前的计算实验，我们发现我们的新版本`AList`在很短的时间内完成了 100,000 次插入，我们甚至没有注意到。我们将推迟到本书的最后一章来全面分析为什么会发生这种情况。

#### 

[](https://cs61b-2.gitbook.io/cs61b-textbook/8.-arraylist#memory-performance)

内存性能

我们`AList`快完成了，但有一个主要问题。假设我们插入 1,000,000,000 个项目，然后删除 990,000,000 个项目。在这种情况下，我们将只使用 10,000,000 个内存盒，其余 99% 完全未使用。

为了解决这个问题，当数组开始看起来是空的时候，我们也可以缩小数组的大小。具体来说，我们定义一个“使用率”R，它等于列表的大小除以数组的长度`items`。例如，在下图中，使用率为 0.04。

![](https://cs61b-2.gitbook.io/~gitbook/image?url=https%3A%2F%2Fjoshhug.gitbooks.io%2Fhug61b%2Fcontent%2Fchap2%2Ffig25%2Fusage_ratio.png&width=768&dpr=4&quality=100&sign=3dc4340e&sv=1)

图25/使用率

在典型的实现中，当 R 降至 0.25 以下时，我们将数组大小减半。

#### 

[](https://cs61b-2.gitbook.io/cs61b-textbook/8.-arraylist#generic-alists)

通用 AList

正如我们之前所做的那样，我们可以修改我们的，`AList`以便它可以容纳任何数据类型，而不仅仅是整数。为此，我们再次在类中使用特殊的尖括号表示法，并在适当的位置将任意类型参数替换为整数。例如，下面，我们使用`Glorp`作为我们的类型参数。

有一个显著的语法差异：由于泛型实现方式存在一个模糊问题，Java 不允许我们创建泛型对象数组。也就是说，我们不能做这样的事情：

复制

```
Glorp[] items = new Glorp[8];
```

相反，我们必须使用下面显示的尴尬语法：

复制

```
Glorp[] items = (Glorp []) new Object[8];
```

这会产生编译警告，但这是我们必须忍受的事情。我们将在后面的章节中详细讨论这一点。

我们做出的另一个改变是，我们将“删除”的任何项目清零。而之前，我们没有理由将删除的元素清零，而对于通用对象，我们确实希望将存储的对象的引用清零。这是为了避免“徘徊”。回想一下，Java 仅在最后一个引用丢失时才会销毁对象。如果我们无法将引用清零，那么 Java 将不会对已添加到列表中的对象进行垃圾回收。

这是一个细微的性能错误，除非您特别留意，否则不太可能发现，但在某些情况下可能会导致大量内存浪费。

[  
](https://cs61b-2.gitbook.io/cs61b-textbook/7.-testing)