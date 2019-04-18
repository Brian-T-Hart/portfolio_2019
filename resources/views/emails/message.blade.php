<!DOCTYPE html>
<html>
<head>
    <title>Message From Portfolio Visitor</title>
</head>

<style>

	body{
		font-family: Arial, Helvetica, sans-serif;
	}

	a {
		text-decoration: none;
	}

	header {
		background-color: #FFA500;
		color: #FFF;
		display: flex;
		height: 100px;
		justify-content: center;
		align-content: center;
	}

	h1 {
		padding: 10px;
	}

	h3 {
		font-weight: 600;
	}

	h4 {
		font-weight: 200;
	}

	.orange {
		color: orange;
	}

	.container {
		margin: auto;
		width: 80%;
	}

</style>

<body>

	<header class="header">

		<h1>New Message</h1>

	</header>

	<div class="container">
		<h4>From: {{$messageData['name']}}</h4>
		<h4>Email: {{$messageData['email']}}</h4>
		<p>{{$messageData['message']}}</p>
	</div>

</body>

</html>