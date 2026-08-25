from django.db import migrations


def create_missing_related_tables(apps, schema_editor):
    existing_tables = set(schema_editor.connection.introspection.table_names())
    for model_name in ("EventCategory", "EventSpeaker", "EventAgendaItem"):
        model = apps.get_model("events", model_name)
        if model._meta.db_table not in existing_tables:
            schema_editor.create_model(model)
            existing_tables.add(model._meta.db_table)


class Migration(migrations.Migration):
    dependencies = [("events", "0003_eventbrite_event_schema")]

    operations = [
        migrations.RunPython(create_missing_related_tables, migrations.RunPython.noop),
    ]
