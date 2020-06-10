from mathsnuggets import widgets


def test_widgets():
    test_data = {k: v for k, v in widgets.info.items() if v.get("test")}
    for _name, info in test_data.items():
        form = info["class"](**info["test"])
        assert form.valid

        for name, field in form._fields():
            assert (
                field.get("value")
                or field.get("html")
                or field.get("random")
                or field.get("constraint")
            )