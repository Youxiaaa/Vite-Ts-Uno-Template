<template>
  <div class="w-full min-h-screen flex flex-col items-center justify-center gap-50px">
    <button @click="getRoomList()" class="bg-#feb401 py-20px px-40px rounded-lg cursor-pointer text-32px border-balck border-5px shadow-[6px_6px_0px_black] active:translate-y-5px active:translate-x-5px">getRoomList</button>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-20px lg:gap-50px max-w-1440px px-5% mx-auto">
      <div v-for="item in orders" :key="item.id" class="col-span-1 border-black border-5px rounded-15px overflow-hidden shadow-[6px_6px_0px_black] duration-.3s cursor-pointer hover:-translate-y-15px">
        <img :src="item.pictureUrl" :alt="item.title" class="w-full h-200px object-cover">
        <h2 class="font-bold text-24px p-20px">{{ item.title }}</h2>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  const api = inject('$api') as any

  const query = {
    pageNo: 1,
    pageSize: 12
  }

  const getRoomList = async () => {
    const { result } = await api.room.getRoomList(query)
    orders.value = result.orders.data
  }

  const orders = ref([]) as any

  const loadingStore = inject<any>('$stores').loadingStore()

  console.log(loadingStore)
</script>
