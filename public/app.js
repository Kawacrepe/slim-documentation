const app = document.querySelector('#app');
fetch('http://localhost:3333/html')
	.then((res) => {
		return res.json();
	})
		.then((data) => {
			for(const item of data) {
				const cur =  document.createRange().createContextualFragment(item);
				app.appendChild(cur);
			}
		})