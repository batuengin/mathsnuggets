import sympy

from mathsnuggets.core import fields, form

test = {"expression": "(x - 2) (x + 3)"}


class Expand(form.Form):
    """Expand"""

    template = "Expand `expression` `expansion`"

    expression = fields.Expression("expression")

    def validate(self):
        self.expression = sympy.factor(self.expression)

    @fields.computed("Expansion")
    def expansion(self):
        return sympy.expand(self.expression)

    a = fields.RandomNumber("a")
    b = fields.RandomNumber("b")
    c = fields.RandomNumber("c")
    d = fields.RandomNumber("d")

    def generator(self):
        x = sympy.symbols("x")
        self.expression = sympy.factor(
            sympy.expand((self.a * x + self.b) * (self.c * x + self.d))
        )

    @fields.range_constraint(
        "Non-zero expression", default=True, hidden=True, protected=True
    )
    def nonzero(self):
        self.b -= {0}
        self.c -= {0}

    @fields.range_constraint("Quadratic", default=True)
    def quadratic(self):
        self.a -= {0}

    @fields.range_constraint("Linear")
    def linear(self):
        self.a = {0}

    @fields.range_constraint("ax(bx+c)")
    def one_bracket(self):
        self.b = {0}
