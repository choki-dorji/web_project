from django.db import models
import uuid

# Create your models here.
class prescription(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    patient_cid = models.IntegerField()
    patient_name = models.TextField()
    patient_age = models.IntegerField()
    Diagonisis = models.TextField()
    Description = models.TextField()
    Medicine = models.TextField()
    Doctor = models.TextField()
    
    def __str__(self):
        return self.patient_name
