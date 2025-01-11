from django.db import models

class Anime(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return self.title

class Episode(models.Model):
    anime = models.ForeignKey(Anime, related_name='episodes', on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    number = models.IntegerField()

    def __str__(self):
        return f'{self.title} - Episode {self.number}'

class Comment(models.Model):
    anime = models.ForeignKey(Anime, related_name='comments', on_delete=models.CASCADE)
    user_name = models.CharField(max_length=255)
    comment = models.TextField()

    def __str__(self):
        return f'Comment by {self.user_name} on {self.anime.title}'
