<template>
  <q-page padding>
    <div class="row q-col-gutter-md">
      <div class="col-3">
        <q-card>
          <q-item-label header>
            <NuxtLink to="/course"> 강의 로드맵 </NuxtLink>
          </q-item-label>
          <q-list bordered separator>
            <q-item
              v-for="(course, index) in courses"
              :key="course.courseSlug"
              v-ripple
              clickable
              :to="course.path"
            >
              <q-item-section> {{ index + 1 }}. {{ course.title }} </q-item-section>
            </q-item>

            <NuxtLink v-slot="{ navigate }" custom to="/course/prefetching-1">
              <q-item clickable @click="navigate()">Prefetching Test 1</q-item>
            </NuxtLink>
            <NuxtLink v-slot="{ navigate }" custom to="/course/prefetching-2">
              <q-item clickable @click="navigate()">Prefetching Test 2</q-item>
            </NuxtLink>
            <NuxtLink v-slot="{ navigate }" custom to="/course/prefetching-3">
              <q-item clickable @click="navigate()">Prefetching Test 3</q-item>
            </NuxtLink>
          </q-list>
        </q-card>
      </div>
      <div class="col">
        <NuxtPage />
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
  const { courses } = useCourses();
</script>

<style scoped></style>
