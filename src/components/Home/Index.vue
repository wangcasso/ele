<template>
    <div>
        <header class="location">
            <div class="place">
                <div class="place60">
                    <span>@</span><span class='placeMsg'>禧福阁深圳西部硅谷</span>
                </div>
            </div>
        </header>
        <SearchArea></SearchArea>
    </div>
</template>

<script>
import SearchArea from "@/components/common/SearchArea";

export default {
  components: {
    SearchArea
  }
};
</script>

<style>
.location {
  background-image: linear-gradient(90deg, #0af, #0085ff);
  color: #fff;
  padding: 2.666667vw 3.733333vw 0;
}
.location .place {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 9.2vw;
  font-size: 34px;
}
.location .place .place60 {
  display: flex;
  align-items: center;
  width: 60%;
  font-weight: 700;
}
.place span:first-of-type {
  width: 3.466667vw;
}
.placeMsg {
  margin: 0 1.333333vw;
  max-width: 80%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
