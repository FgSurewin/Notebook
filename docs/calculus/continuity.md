# Continuity

> Some functions are nicer than others. The continuous functions are nicely behaved in the sense of point wise limits.

## Definition

**Definition 10 (Continuity)** We say that a function $f$ is {\em continuous} at a point $x=a$ provided that:

**(a) The function value $f(a)$ exists;**

**(b) The limit $\lim_{x \rightarrow a}f(x)$ exists (as a finite number);**

**(c) These are both the same number,$ i.e$. **

$$\lim_{x \rightarrow a}f(x)=f(a).$$

**In other words, a function $y=f(x)$ is {\em continuous} when small changes in $x$ produce small changes in $y$.**

30. **Use your sketch from exercise 15 to find $\displaystyle{\lim_{x\rightarrow0^+}\frac{1}{x}}$ and $\displaystyle{\lim_{x\rightarrow0^-}\frac{1}{x}}$. Give the equation for the vertical asymptote of $y=\frac{1}{x}$.**

- $\displaystyle{\lim_{x\rightarrow0^+}\frac{1}{x}}=\infty$

- $\displaystyle{\lim_{x\rightarrow0^-}\frac{1}{x}}=-\infty$
- The vertical asymptote

31. Let $\displaystyle{f(x)=\frac{5x+9}{x}}$.

**(a) Use Desmos to graph $y=f(x)$**

![](https://cdn.jsdelivr.net/gh/FgSurewin/pictures/img/31.jpg)

**(b) Find $\lim_{x\longrightarrow\infty}f(x)$.**

(Hint: first, divide every term in both the numerator and the denominator by $x$.)

$$\displaystyle{\lim_{x\longrightarrow\infty}\frac{5x+9}{x}}=\lim_{x\longrightarrow\infty}5+\lim_{x\longrightarrow\infty}\frac{9}{x}=5$$

**(c) Where is this function continuous?**

The point $(0, f(0))$ is the discontinuity point. Except this point, the function is continuous everywhere.

**(d) Where is this function discontinuous?**

The point $(0, f(0))$ is the discontinuity point.

**(e) What happens to the graph slightly to the left of the discontinuity? What happens to the graph slightly to the right of the discontinuity?**

- $\displaystyle{\lim_{x\rightarrow0^-}f(x)}=-\infty$
- $\displaystyle{\lim_{x\rightarrow0^+}f(x)}=\infty$

**(f) What are the equations for the horizontal and vertical asymptotes.**

- The horizontal asymptote is $y=5$
- The vertical asymptote is $x=0$
