<script>
	let number = 0;
</script>

<form class="mx-2" action="/random/{number}" method="get">
	<h3 class="mt-10 font-semibold text-lg">Ingrese el número:</h3>
	<input class="border border-black" type="number" bind:value={number} />
</form>