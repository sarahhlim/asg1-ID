<script>
const soldoutButtons = document.querySelectorAll(".soldout");
const alertBar = document.getElementById("soldout-alert");

soldoutButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    alertBar.style.top = "0px";

    setTimeout(() => {
      alertBar.style.top = "-60px";
    }, 2000);
  });
});
</script>