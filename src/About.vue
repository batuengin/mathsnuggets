<template lang="pug">
div
  section.hero.is-primary
    div.hero-body.has-text-centered
      div.container
        div.is-large
          i.fa-4x.fas.fa-info
        h1.title.is-2 About us
  .container
    .card-content.content
      h2.title.is-1 Hello to you, reader!
      p.is-size-4.
        We are two Teachers of Mathematics seeking to facilitate teaching and learning
        mathematics. Having met at the #[a(href="https://ox.ac.uk") University of Oxford] and enjoyed a short-lived
        PGCE course together, we decided to create this website to facilitate the creation of teaching resources.
    .columns.has-text-centered
      .column
        .card-content
          h2.title.is-2 Khoi Nguyen
          h4.subtitle.is-4 Main Developer
          p.content.
            Hello! My name is Khoi and I am the main developer on this project.
            My responsibility is to implement new features
            and ensure the software works well.
          p.content.
            I am a pure mathematician by education.
            I got my MMath from the
            #[a(href="https://cam.ac.uk") University of Cambridge] in 2012,
            followed by a PhD from
            #[a(href="https://imperial.ac.uk") Imperial College] in 2016.
            I started teaching shortly afterwards,
            and obtained by PGCE from the
            #[a(href="https://ox.ac.uk") University of Oxford] in 2020.
            I now work as a Teacher of Mathematics at the
            #[a(href="https://kingscollegeschools.org/madrid/school/") British School of Madrid].
          p.content.
            Outside of teaching, I enjoy playing piano and table tennis.
            I represented Oxford's first team in the 77#[sup th]
            Table Tennis Varsity match against Cambridge.
      .column
        .card-content
          h2.title.is-2 Tom Chambaud
          h4.subtitle.is-4 Apprentice Developer
          p.content.
            As you may have guessed, I am part French (half to be precise) and, as of September
            2020, a Teacher of Mathematics at Sandwell Academy. In 2019, I graduated from #[a(href="https://keele.ac.uk") Keele University]
            with a First-Class honours degree in Mathematics and obtained my PGCE qualification from the
            #[a(href="https://ox.ac.uk") University of Oxford] the following year.
          p.content.
            I am passionate about helping young people and enjoying life outside of teaching. My hobbies include
            competitive badminton, cooking great food and playing piano!
</template>

<script>
export default {
  title: 'About us',
  name: 'About'
}
</script>
