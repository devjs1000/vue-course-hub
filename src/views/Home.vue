<script setup>
import ButtonRepo from "@/components/Href.vue";
import Hero from "@/components/Hero.vue";
import CourseCard from "@/components/CourseCard.vue";
import ProfessionalCertificate from "@/components/ProfessionalCertificate.vue";
import Categories from "@/components/Categories.vue";
import Explain from "@/components/Explain.vue";
</script>

<template>
  <div class="bg-gray-50">
    <Hero />
    <ProfessionalCertificate />
    <div class="flex overflow-scroll py-5">
      <span v-for="course in courses" :key="course.name">
        <CourseCard
          :name="course.name"
          :about="course.about"
          :tags="course.tags"
          :price="course.price"
          :category="course.category"
          :image="course.image"
        />
      </span>
    </div>
    <Categories :data="courses" />

    <!-- <img
      alt=""
      src="data:image/png;base64,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"
      class='h-[50vh] mx-auto py-10'
    /> -->

    <explain
      heading="Heading"
      subHeading="Coursera was founded by Daphne Koller and Andrew Ng in 2012 with a vision of providing Coursera was founded by Daphne Koller and Andrew Ng in 2012 with a vision of providing Coursera was founded by Daphne Koller and Andrew Ng in 2012 with a vision of providing"
      image="https://images.ctfassets.net/00atxywtfxvd/6kuCeB7qQyk7yVhr9rwxVt/454b43b3c8c4b64cbf9f220809d0410a/million-learners-c.png"
      action='join us'
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      courses: [
        {
          name: "html",
          about: "best course ever",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyq-mRleja_C1p2NNnNW6DynWnaZwJS53UVg&usqp=CAU",
          price: 200,
          tags: ["web", "html", "basics"],
          category: "web development",
        },
        {
          name: "html",
          about: "best course ever",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyq-mRleja_C1p2NNnNW6DynWnaZwJS53UVg&usqp=CAU",
          price: 200,
          tags: ["web", "html", "basics"],
          category: "web development",
        },
        {
          name: "html",
          about: "best course ever",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyq-mRleja_C1p2NNnNW6DynWnaZwJS53UVg&usqp=CAU",
          price: 200,
          tags: ["web", "html", "basics"],
          category: "web development",
        },
        {
          name: "html",
          about: "best course ever",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyq-mRleja_C1p2NNnNW6DynWnaZwJS53UVg&usqp=CAU",
          price: 200,
          tags: ["web", "html", "basics"],
          category: "web development",
        },
        {
          name: "html",
          about: "best course ever",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyq-mRleja_C1p2NNnNW6DynWnaZwJS53UVg&usqp=CAU",
          price: 200,
          tags: ["web", "html", "basics"],
          category: "web development",
        },
      ],
    };
  },
  setup() {},
};
</script>