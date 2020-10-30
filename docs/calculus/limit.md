# Limit

> Calculus is about making sense of infinity and zero. Infinity is not a number, but rather infinity is a limit of values that grow large without bound.

14. **Complete Table 2. Find the limit $\displaystyle{\lim_{n\rightarrow\infty}\frac{1}{n}}$. What happens to the values of $\frac{1}{n}$ as $n$ grows large?**

| $n$       | $\frac{1}{n}$ |
| --------- | ------------- |
| 1         | 1             |
| 10        | 0.1           |
| 20        | 0.05          |
| 40        | 0.025         |
| 50        | 0.02          |
| 100       | 0.1           |
| 1000      | 0.001         |
| 10,000    | 0.0001        |
| 100,000   | 0.00001       |
| 1,000,000 | 0.000001      |

$\frac{1}{n}$ **will close to 0 as $n$ grows up**

15. **For the reciprocal function $\displaystyle{f(x)=\frac{1}{x}}$, complete Table 3.**

**(a) Use Table 3 to sketch an accurate graph. Do you see any type of symmetry in the graph? What are the domain and range for the reciprocal function? Where is the reciprocal function either increasing or decreasing?**

| $x$            | $f(x)=\frac{1}{x}$ |
| -------------- | ------------------ |
| 3              | 0.3333333333332    |
| 2              | 0.5                |
| 1              | 1                  |
| $\frac{1}{4}$  | 4                  |
| $\frac{1}{3}$  | 3                  |
| 0              | undefined          |
| $-\frac{1}{3}$ | -3                 |
| $-\frac{1}{2}$ | -2                 |
| -1             | -1                 |
| -2             | -0.5               |
| -3             | -0.3333333333332   |

![](https://cdn.jsdelivr.net/gh/FgSurewin/pictures/img/15.jpg)

- The graph is symmetry base on the **origin**
- The domain is $(-\infty, 0)\cup (0, \infty)$
- The range is $(-\infty, 0)\cup (0, \infty)$
- The function is **decreasing** on the whole domain

**(b) What are the values of $\displaystyle{\lim_{x\rightarrow\infty}\frac{1}{x}}$ and $\displaystyle{\lim_{x\rightarrow-\infty}\frac{1}{x}}$?**

$$\displaystyle{\lim_{x\rightarrow\infty}\frac{1}{x}}=0$$

$$\displaystyle{\lim_{x\rightarrow-\infty}\frac{1}{x}}=0$$

**(c) Does $x$ ever reach $\infty$? Does $\frac{1}{x}$ ever reach $0$? How close can $\frac{1}{x}$ get to $0$ for large values of $x$?**

No. As $x$ approaches infinity, the value of $\frac{1}{x}$ almost touches zero but not exactly zero.

**(d) Give the equation for the horizontal asymptote of $y=\frac{1}{x}$.**

- The horizontal asymptote is $ y=0$
- The vertical asymptote is $x = 0$

16. **Let $f(x) = \frac{1}{x}$.**

**(a) Let $\varepsilon = 0.01$. Find $M$ large enough so that if $x>M$ then $|f(x)-0|<0.01$.**

$$|\frac{1}{x} -0|<0.01$$

$$\frac{1}{x}<0.01$$

Solve for x

$$x>100$$

So we got

$$x>M\geqslant100$$

**(b) Let $\varepsilon = 0.0001$. Find $M$ large enough so that if $x>M$ then $|f(x)-0|<0.0001$.**

$$|\frac{1}{x} -0|<0.0001$$

$$\frac{1}{x}<0.0001$$

Solve for x

$$x>1000$$

So we got

$$x>M\geqslant1000$$

**(c) Use Definition 3 to prove Theorem 4**

Prove

$$\lim_{x \to \infty}\frac{1}{x}=0$$

Need to show

$$|\frac{1}{x} -0|<\varepsilon, \forall \varepsilon>0$$

Let $\varepsilon>0$ be given

Want to show

$$\frac{1}{x}<\varepsilon$$

Need $x>\frac{1}{\varepsilon}$

Pick $M>\frac{1}{\varepsilon}$ so $\frac{1}{m}<\varepsilon$

According to $x>m$, we can infer to

$$\frac{1}{m}<\frac{1}{m}<\varepsilon$$

17. **Use Definition 5 to prove parts (a) and (b) of Theorem 6.**

(a) Prove $\lim_{x \to a}1=1$

Let $\varepsilon >0$.

We have

$$|1 -1|=0<\varepsilon$$

The limit exist for every number of $a$

(b) Prove $\displaystyle{\lim_{x\rightarrow a}x = a}$

Let $\varepsilon >0$.

Want

$$|x-a|<\varepsilon$$

Whenever

$$|x-a|<\delta$$

Pick

$$\delta =\varepsilon$$

END.

**Theorem 6 (Properties of Limits)**

(a) $\displaystyle{\lim_{x\rightarrow a} 1 = 1}$

(b) $\displaystyle{\lim_{x\rightarrow a}x = a}$

(c) $\displaystyle{\lim_{x\rightarrow a}b \cdot f(x) = b\cdot\lim_{x\rightarrow a} f(x)}$, where $b$ is any real number.

(d) $\displaystyle{\lim_{x\rightarrow a}[f(x)+g(x)] = \lim_{x\rightarrow a} f(x)+ \lim_{x\rightarrow a} g(x) }$

(e) $\displaystyle{\lim_{x\rightarrow a}[f(x)\cdot g(x)] = \lim_{x\rightarrow a} f(x)\cdot\lim_{x\rightarrow a} g(x) }$

(f) $\displaystyle{\lim_{x\rightarrow a}\left[\frac{f(x)}{g(x)}\right] = \frac{\lim_{x\rightarrow a} f(x)}{\lim_{x\rightarrow a} g(x)} }$, provided $\displaystyle{\lim_{x\rightarrow a} g(x) \neq 0}$.

(g) $\displaystyle{\lim_{x\rightarrow a}[f(x)]^n = \left[ \lim_{x\rightarrow a} f(x)\right]^n }$

18. **Use Theorem 6 to compute: $\displaystyle{\lim_{x\rightarrow 3}4x^2+1}$.**

$$\displaystyle{\lim_{x\rightarrow 3}4x^2+1}=4(\lim_{x\rightarrow 3}x)^2+1=37$$

19. **Compute $\displaystyle{\lim_{x\rightarrow-1}(4x+5)^{12}}$.**

$$\displaystyle{\lim_{x\rightarrow-1}(4x+5)^{12}}=(\lim_{x\rightarrow-1}(4x+5))^{12}=(\lim_{x\rightarrow-1}4x+\lim_{x\rightarrow-1}5)^{12}=-4+5=1$$

**Theorem 7**

If $f(x)=g(x)$ for all $x\neq a$ then

$$\lim_{x\rightarrow a}f(x)=\lim_{x\rightarrow a}g(x)$$

20. **Consider the functions $\displaystyle{f(x) = \frac{x^2-9}{x-3}}$ and $g(x)=x+3$.**

**(a) Are these functions exactly the same? How are they similar? How are they different from each other?**

They are not the same. When you factor $\displaystyle{f(x) = \frac{x^2-9}{x-3}}$, you will get $f(x)=x+3,(x\neq 3)$. Given the domain, it is easy to find that they have two different domains. The domain of $f(x)$ is $(-\infty, 3)\cup(3, \infty)$ and the domain of $g(x)$ is $(-\infty, \infty)$.

**(b) For which values of $x$ does $f(x)=g(x)$?**

When we restrict the domain of $g(x)$ to $(-\infty, 3)\cup(3, \infty)$, we can get the same range from $f(x)$ and $g(x)$

**(c) How do the graphs of $f$ and $g$ differ?**

There is a "hold" on the graph of $f(x)$ where $x=3$. But the shape of the function $f(x)$ is a straight line.

- $g(x)$

![](https://cdn.jsdelivr.net/gh/FgSurewin/pictures/img/a.jpg)

- $f(x)$

![](https://cdn.jsdelivr.net/gh/FgSurewin/pictures/img/b.jpg)

21. **Use Theorems 6 and 7 to compute $\displaystyle{\lim_{x\rightarrow3}\frac{x^2-9}{x-3}}$.**

Use Theorem 7

$$\displaystyle{\lim_{x\rightarrow3}\frac{x^2-9}{x-3}}=\lim_{x\rightarrow3}(x+3)=6$$

22. **Use Theorems 6 and 7 to compute $\displaystyle{\lim_{x\rightarrow4}\frac{\sqrt{x}-2}{x-4}}$.**

Use Theorem 7

$$\displaystyle{\lim_{x\rightarrow4}\frac{\sqrt{x}-2}{x-4}}=\lim_{x\rightarrow4}\frac{1}{\sqrt{x}+2}=\frac{1}{4}$$

23. **Use Theorems 6 and 7 to compute $\displaystyle{\lim_{x\rightarrow2}\frac{x^3-8}{x^4-16}}$.**

Use Theorem 7

$$\displaystyle{\lim_{x\rightarrow2}\frac{x^3-8}{x^4-16}}=\lim_{x\rightarrow2}\frac{x^2+2x+4}{(x+2)(x^2+4)}=\frac{12}{32}=\frac{3}{8}$$

24. **Sketch an accurate graph of the piecewise defined function:**

![](https://cdn.jsdelivr.net/gh/FgSurewin/pictures/img/25_爱奇艺.png)

**(a) Use your graph to find the following values:**

(1) $g(-2)= 1$

(2) $g(1) = 0$

(3) $g(0)= undefined$

(4) $g(3) = 2$

**(b) Use your graph to find the following limits.**

(1) $\displaystyle{\lim_{x\rightarrow -\infty} g(x)= 2}$

(2) $\displaystyle{\lim_{x\rightarrow\infty} g(x)=2}$

(3) $\displaystyle{\lim_{x\rightarrow0} g(x)=1}$

(4) $\displaystyle{\lim_{x\rightarrow 1} g(x)=0}$

(5) $\displaystyle{\lim_{x\rightarrow -2} g(x)=d.n.e}$

25. **Use your graph from the previous exercise to find the following one-sided limits:**

(a) $\displaystyle{\lim_{x\rightarrow-2^+} g(x)=1}$

(b) $\displaystyle{\lim_{x\rightarrow-2^-} g(x)=2}$

(c) $\displaystyle{\lim_{x\rightarrow0^+} g(x)=1}$

(d) $\displaystyle{\lim_{x\rightarrow0^-} g(x)=1}$

(e) $\displaystyle{\lim_{x\rightarrow 1^+} g(x)=0}$

(f) $\displaystyle{\lim_{x\rightarrow 1^-} g(x)=0}$

(g) $\displaystyle{\lim_{x\rightarrow3^+} g(x)=d.n.e}$

(h) $\displaystyle{\lim_{x\rightarrow3^-} g(x)=2}$

26. **For each situation described below, construct an example of a a function that fits the description.**

**(a) The graph of a function $f$ for which $f(2)$ does not exist but $\displaystyle{\lim_{x\rightarrow 2}f(x)}$ does exist.**

![](C:\Users\32604\Desktop\HW\26a.jpg)

**(b) The graph of a function for which $f(2)$ exists and $\displaystyle{\lim_{x\rightarrow 2}f(x)}$ exists, but the two values are not equal to each other.**

![](C:\Users\32604\Desktop\HW\26b.jpg)

**(c) The graph of a function $f$ such that neither $f(2)$ nor $\displaystyle{\lim_{x\rightarrow 2}f(x)}$ exist.**

![](C:\Users\32604\Desktop\HW\26c.jpg)

27. **Sketch a graph of a function that has the given limits. There are many possible correct answers.**

    **(a) $\displaystyle{\lim_{x\rightarrow -\infty}f(x)=3}$ and $\displaystyle{\lim_{x\rightarrow \infty}f(x)=-\infty}$.**

    ![](C:\Users\32604\Desktop\HW\27a.jpg)


    **(b) $\displaystyle{\lim_{x\rightarrow -\infty}f(x)=2}$ and $\displaystyle{\lim_{x\rightarrow \infty}f(x)=2}$.**

    ![](C:\Users\32604\Desktop\HW\27b.png)



    **(c) $\displaystyle{\lim_{x\rightarrow 5^+}f(x)=1}$ and $\displaystyle{\lim_{x\rightarrow 5^-}f(x)=3}$.**

![](C:\Users\32604\Desktop\HW\27c.jpg)

29. **Complete Table. Simplify each result as much as possible. Do you see a pattern? Give a formula for the $n$th partial sum $\displaystyle{\frac{1}{2}+\frac{1}{4}+\cdots+\frac{1}{2^n}}$. What happens to the value of the partial sums as $n$ grows large?**

Find $\displaystyle{\lim_{n\rightarrow\infty}\left[\frac{1}{2}+\frac{1}{4}+\cdots+\frac{1}{2^n}\right]}$.

Let $a$ represents each element of the equation, we have

$$a_n=a_1+q^{n-1}$$

$$a_{n+1}=a_1\cdot q^n$$

$$SUM=S_n=a_1+a_2+a_3+\cdots+a_n$$

Let $S_n$ times $q$

$$qS_n=a_2+a_3+\cdots+a_n+a_{n+1}$$

Let $S_n-qS_n$, we got a new equation

$$a_1-a_{n+1}=(1-q)S_n$$

$$S_n=\frac{a_1-a_{n+1}}{1-q}=\frac{a_1-a_1\cdot q^n}{1-q}=a_1\cdot \frac{1-q^n}{1-q}$$

Pass $a_1=\frac{1}{2}$ and $q=\frac{1}{2}$ into equation

$$S_n=1-\frac{1}{2^n}$$

When $n$ approaches $\infty$

$$\displaystyle{\lim_{n\rightarrow\infty}\left[\frac{1}{2}+\frac{1}{4}+\cdots+\frac{1}{2^n}\right]}=1$$

| $n$ | $\frac{1}{2}+\frac{1}{4}+\cdots+\frac{1}{2^n}$ |
| --- | ---------------------------------------------- |
| 1   | 0                                              |
| 2   | 0.5                                            |
| 3   | 0.75                                           |
| 4   | 0.875                                          |
| 5   | 0.96875                                        |
| 6   | 0.984375                                       |
