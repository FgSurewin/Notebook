# Discontinuity

## Infinite Discontinuity

32. **Use Desmos to graph each of the following functions. For each function and its graph, please answer the following questions.**

What is limit of the function as $x$ approaches $\infty$?

What is limit of the function as $x$ approaches $-\infty$?

Where is the function defined?

Where is the function continuous?

Where is the function discontinuous?

What are the left- and right-hand limits at each point of discontinuity?

Does the function have any vertical or horizontal asymptotes? Where are they? How are the asymptotes described by the limits you found?

(a) $\displaystyle{f(x)=\frac{5}{x^2-1}}$

![](<https://cdn.jsdelivr.net/gh/FgSurewin/pictures/img/(32)a.png>)

Divide every term in both the numerator and the denominator by $x^2$

$$\frac{5}{x^2-1}=\frac{\frac{5}{x^2}}{(1+\frac{1}{x^2})}$$

When $x$ approaches $\infty$

$$\lim_{x \to \infty}\frac{\frac{5}{x^2}}{(1+\frac{1}{x^2})}=0$$

When $x$ approaches $- \infty$

$$\lim_{x \to -\infty}\frac{\frac{5}{x^2}}{(1+\frac{1}{x^2})}=0$$

- Domain : $(-\infty, -1)\cup(-1, 1)\cup(1, \infty)$
- Function is continuous at its domain
- Function is discontinuous at $x=-1$ and $x = 1$

(b) $\displaystyle{g(x)=\frac{x}{(x-1)(x+4)}}$

![](C:\Users\32604\Desktop\HW\32b.png)

$$g(x)=\frac{x}{(x-1)(x+4)}=\frac{x}{x^2+3x-4}$$

Divide every term in both the numerator and the denominator by $x^ 2$

$$\frac{x}{x^2+3x-4}=\frac{\frac{1}{x}}{1+\frac{3}{x}-\frac{4}{x^2}}$$

When $x$ approaches $\infty$

$$\lim_{x \to \infty}\frac{\frac{1}{x}}{1+\frac{3}{x} -\frac{4}{x^2}}=0$$

When $x$ approaches $- \infty$

$$\lim_{x \to -\infty}\frac{\frac{1}{x}}{1+\frac{3}{x} -\frac{4}{x^2}}=0$$

- Domain : $(-\infty, -4)\cup(-4, 1)\cup(1, \infty)$
- Function is continuous at its domain
- Function is discontinuous at $x=-4$ and $x = 1$

(c) $\displaystyle{r(x)=\frac{6x^2+x+12}{3x^2-5x-2}}$

![](C:\Users\32604\Desktop\HW\32c.png)

Divide every term in both the numerator and the denominator by $x^ 2 $

$$\frac{6x^2+x+12}{3x^2-5x-2}=\frac{6 +\frac{1}{x}+\frac{12}{x^2}}{3-\frac{5}{x}-\frac{2}{x^2}}$$

When $x$ approaches $\infty$

$$\lim_{x \to \infty}\frac{6 +\frac{1}{x}+\frac{12}{x^2}}{3-\frac{5}{x}-\frac{2}{x^2}}=2$$

When $x$ approaches $- \infty$

$$\lim_{x \to -\infty}\frac{6 +\frac{1}{x}+\frac{12}{x^2}}{3-\frac{5}{x}-\frac{2}{x^2}}=2$$

- Domain : $(-\infty, -\frac{1}{3})\cup(-\frac{1}{3}, 2)\cup(2, \infty)$
- Function is continuous at its domain
- Function is discontinuous at $x=-\frac{1}{3}$ and $x = 2$

(d) $\displaystyle{q(x)=\frac{x^3-125}{x^2+3x-40}}$

![](C:\Users\32604\Desktop\HW\32d.png)

Factor

$$\displaystyle{\frac{x^3-125}{x^2+3x-40}}=\frac{(x-5)(x^2+5x+25)}{(x+8)(x-5)}=\frac{(x^2+5x+25)}{(x+8)}$$

Divide every term in both the numerator and the denominator by $x$

$$\frac{(x^2+5x+25)}{(x+8)}=\frac{(\frac{x^2}{x}+\frac{5x}{x}+\frac{25}{x})}{(\frac{x}{x}+\frac{8}{x})}$$

When $x$ approaches $\infty$

$$\lim_{x \to \infty}\frac{(\frac{x^2}{x}+\frac{5x}{x}+\frac{25}{x})}{(\frac{x}{x}+\frac{8}{x})}=\lim_{x \to \infty}\frac{x+5+0}{1+0}=\infty$$

When $x$ approaches $- \infty$

$$\lim_{x \to -\infty}\frac{(\frac{x^2}{x}+\frac{5x}{x}+\frac{25}{x})}{(\frac{x}{x}+\frac{8}{x})}=\lim_{x \to -\infty}\frac{x+5+0}{1+0}=-\infty$$

- Domain : $(-\infty, -8)\cup(-8, 5)\cup(5, \infty)$
- Function is continuous at its domain
- Function is discontinuous at $x=5$ and $x=8$

**Definition 11 (Infinite Discontinuity)** If $\displaystyle{\lim_{x\rightarrow a^+}f(x)=\pm\infty}$ or if $\displaystyle{\lim_{x\rightarrow a^-}f(x)=\pm\infty}$, then $f$ has an {\em infinite discontinuity} at the point $x=a$. Notice that when this happens, the limit does not exist as a number. Moreover, in this situation, the line $x=a$ is a vertical asymptote to the graph $y=f(x)$.

## Jump Discontinuity

33. **Sketch a graph of the greatest integer function $f(x)=\lfloor x \rfloor$. This function is also known as the floor function. You can obtain this graph in Desmos by typing "y = floor(x)".**

![](C:\Users\32604\Desktop\HW\test.jpg)

**(a) What is the limit of this function as $x$ approaches 1 from the left? In other words, what is $\displaystyle{\lim_{x\rightarrow 1^-}\lfloor x \rfloor}$?**

$$\displaystyle{\lim_{x\rightarrow 1^-}\lfloor x \rfloor}=0$$

**(b) What is the limit of this function as $x$ approaches 1 from the right? In other words, what is $\displaystyle{\lim_{x\rightarrow 1^+}\lfloor x \rfloor}$?**

$$\displaystyle{\lim_{x\rightarrow 1^+}\lfloor x \rfloor}=1$$

**(c) What can you say about $\displaystyle{\lim_{x\rightarrow 1}\lfloor x \rfloor}$?**

$$\displaystyle{\lim_{x\rightarrow 1}\lfloor x \rfloor}=>d.n.e$$

**(d) Is the floor function continuous at $x=1$? Explain your answer.**

No, the function is not continuous at $x=1$. Its limit dose not exist when x approaches 1.

**(e) Where is floor function discontinuous? Explain your answer.**

Given the shape above, all integer points are discontinuity point.

**(f) Where is the floor function is continuous? Explain your answer.**

From my perspective, I think all intervals of $(a, a+1)$ where the floor function is continuous and a belongs the integer.

**Definition 12 (Jump Discontinuity)** If $\displaystyle{\lim_{x\rightarrow a^+}f(x)}$ and $\displaystyle{\lim_{x\rightarrow a^-}f(x)}$ both exist but

$$\displaystyle{\lim_{x\rightarrow a^+}f(x)\neq\lim_{x\rightarrow a^-}f(x)}$$

then $f$ has a {\em jump discontinuity} at the point $x=a$.

## Oscillating Discontinuity

34. **Use Desmos to graph $\displaystyle{y=\sin\left(\frac{1}{x}\right)}$. Is this function defined at $x=0$? What can you say about $\displaystyle{\lim_{x\rightarrow 0}\sin\left(\frac{1}{x}\right)}$? Is this function continuous at the origin? Why or why not?**

(1) No, the function is undefined at $x=0$

(2) $\displaystyle{\lim_{x\rightarrow 0}\sin\left(\frac{1}{x}\right)}$ is undefined. As x is approaching zero, the value of function is oscillating. The left side limit of 0 does not equal the right side limit.

**Definition 13 (Oscillating Discontinuity)** When a function $f$ appears to be approaching two or more values simultaneously as $x\rightarrow a$, then $f$ is said to have an {\em oscillating discontinuity} at $x=a$.

## Removable Discontinuity

**Definition 14 (Removable Discontinuity)** If the limit $\displaystyle{\lim_{x\rightarrow a}f(x)}$ exists but is not equal to the function value $f(a)$, then the discontinuity can be ``fixed" by redefining the single point $f(a)$ to be equal to the limiting value $\displaystyle{\lim_{x\rightarrow a}f(x)}$. Such a discontinuity is called a {\em removable discontinuity} because the gap in the graph can be removed by redefining the function at a single point.

35. **Suppose that $\displaystyle{f(x)=\frac{x^2-4}{x-2}}$.**

**In order to show that this function has a removable discontinuity at $x=2$, please do the following:**

**(a) Show that $f$ has a discontinuity at $x=2$.**

Given the condition, we know that the domain of the function is $(-\infty, 2)\cup (2, \infty)$. So $f$ has a discontinuity at $x=2$.

**(b) Define a new function $g(x)$ such that $f(x)=g(x)$ for every $x\neq 2$ but $\displaystyle{\lim_{x\rightarrow 2}f(x)=\lim_{x\rightarrow 2}g(x)=g(2)}$.**

**Pick $g(x)=x+2$**

36. **Identify the points where the function you graphed in exercise 24 is discontinuous. Classify each type of discontinuity present (infinite, oscillating, jump, or removable). Explain your answers using the limits you found in exercises 24 and 25.**

According to the graph, there are three points where the function is discontinuous.

- $(-2, f(-2))$ is the discontinuous point which represents **jump discontinuity**
- $(0, f(0))$ is the discontinuous point which represents **removable discontinuity**
- $(3, f(3))$ is the discontinuous point which represents **infinite discontinuity**

![](https://cdn.jsdelivr.net/gh/FgSurewin/pictures/img/25_爱奇艺.png)

37. **Construct an example for each situation described below.**

**(a) The graph of a function $f$ with $f(4)=2$ that has a removable discontinuity at $x=4$.**

![](C:\Users\32604\Desktop\HW\37a.png)

**(b) The graph of a function that is continuous on its domain but has a jump discontinuity at $x=1$.**

![](C:\Users\32604\Desktop\HW\37c.jpg)

**(c) The graph of a function $f$ that is continuous on $(0,2)$ and $(2,3)$, but has an infinite discontinuity at $x=2$.**

![](C:\Users\32604\Desktop\HW\37.jpg)

38. **For each situation described below, sketch a possible graph of a function that fits the description. Which type of discontinuity is present?**

**(a) $\displaystyle{\lim_{x\rightarrow -1^-}f(x)=2}$ and $\displaystyle{\lim_{x\rightarrow -1^+}f(x)=2}$ and $f(-1)=1$.**

![](https://cdn.jsdelivr.net/gh/FgSurewin/pictures/img/38a.png)

- Removable discontinuity

**(b) $\displaystyle{\lim_{x\rightarrow 0^-}f(x)=-1}$ and $\displaystyle{\lim_{x\rightarrow 0^+}f(x)=1}$ and $f(0)=0$.**

![](https://cdn.jsdelivr.net/gh/FgSurewin/pictures/img/38b.jpg)

- Jump discontinuity

## Intermediate Value

39. **True or False. If the statement is true, explain why. If the statement is false, give a counterexample to show how the statement can fail.**

(a) If $f(3)=-5$ and $f(9)=2$, then there must be a value $c$ where $f(c)=0$.

**False**. $f$ is not a continuous function.

![](C:\Users\32604\Desktop\HW\39a.jpg)

(b) If $f(3)=-5$ and $f(9)=2$, and if $f$ is continuous everywhere, then there must be a value $c$ where $f(c)=0$.

**True**

(c) If $f(3)=-5$ and $f(9)=2$, and if $f$ is continuous everywhere except at $x=0$, then there must be a value $c$ where $f(c)=0$.

**True**

(d) If $f$ is continuous everywhere, and if $f(-2)=3$ and $f(1)=2$, then $f$ must have a root somewhere in $(-2,1)$.

**False**

![](C:\Users\32604\Desktop\HW\39d.jpg)

(e) If $f(0)=f(6)=0$ and $f(2)>0$, then $f(x)$ is positive on the entire interval $(0,6)$.

**False**

![](C:\Users\32604\Desktop\HW\39e.jpg)

(f) If $f$ is continuous on the interval [1,3] and if $f(1)=f(3)=0$ but $f(2)<0$, then $f(x)$ is negative on the entire interval $(1,3)$.

**False**

![](C:\Users\32604\Desktop\HW\39f.jpg)
