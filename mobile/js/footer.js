const createfooter = () => {
	let footer = document.querySelector('.hero-footer');
	footer.innerHTML = `
		  	<footer class="hero-footer">
			<div class="container">
				<div class="row">
					<div class="span4">
						<div class="widget">
							<h5 class="widgetheading">Թերթիր էջերը</h5>
							<ul class="link-list">
								<li><a href="about.html">Մեր Ընկերությունը</a></li>
								<li><a href="regulations.html">Ընդհանուր դրույթներր և պայմանները</a></li>
								<li><a href="portfolio-4cols.html">Այն, ինչ մենք արել ենք</a></li>
							</ul>
						</div>
					</div>
					<div class="span4">
						<div class="widget">
							<h5 class="widgetheading">Կապվեք</h5>

							<strong>GOLDEN Առցանց տպարան</strong>

							<p><i class="icon-phone"></i> (+374)96-965-874<br>
								<i class="icon-envelope-alt"></i> golden.design01@mail.ru
							</p>
						</div>
					</div>
					<div class="span4">
						<h5 class="widgetheading">Բաժանորդագրվեք մեզ</h5>
						<p>Մուտքագրեք ձեր էլ. փոստը և բաժանորդագրվեք մեր տեղեկագրին:</p>

						<a href="#myModal" role="button" class="btn btn-theme btn-medium margintop10" data-toggle="modal">Բաժանորդագրվել</a>

						<div id="myModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
							<div class="modal-header">
								<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
								<img src="img/logo.png" width="48px;" alt="">
							</div>
							<div class="modal-body">
								<div class="icon-modal">
										<i class="bi bi-envelope-heart-fill"></i>		
								</div>
								<form action="https://formsubmit.co/de701f8f99b95cc68adb30aba921d3e0" method="POST">

									<div class="form first">
										<div class="details personal">
											<div class="fields">
												<div class="input-field">
													<!--													<label>Անուն &#42;</label>-->
													<input name="Անուն" type="text" placeholder="Անուն" required>
												</div>
												<div class="input-field">
													<!--													<label>Ազգանուն &#42;</label>-->
													<input name="Ազգանուն" type="text" placeholder="Ազգանուն" required>
												</div>
												<div class="input-field">
													<!--													<label>Հեռ. համար &#42;</label>-->
													<input name="Հեռախոսահամար" type="tel" placeholder="096965874" pattern="[0-9]{3}[0-9]{2}[0-9]{2}[0-9]{2}" required>
												</div>
												<div class="input-field">
													<!--													<label>Էլ հասցե &#42;</label>-->
													<input name="Էլ հասցե" type="email" placeholder="Էլ հասցե" required>
												</div>
												<input type="hidden" name="_template" value="table">
												<input type="hidden" name="_captcha" value="false">
												<input type="text" name="_honey" style="display:none">
												<input type="hidden" name="_autoresponse" value="your custom message">
												<input type="hidden" name="_next" value="https://gdprint.github.io/Thank_you.html">
												<div class="buttons-container">
													<button class="btn btn-theme" type="submit">Բաժանորդագրվել</button>	
												</div>
												<ul class="svg-link">
														<a href="https://www.instagram.com/golden.design01/"><i id="svg" class="bi bi-instagram"></i></a>
														<a href="https://www.facebook.com/profile.php?id=100076392072210"><i id="svg" class="bi bi-facebook"></i></a>
													</ul>
											</div>
										</div>
									</div>
								</form>
							</div>
							<div class="modal-footer">
								<button class="btn" data-dismiss="modal" aria-hidden="true">Փակել</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="sub-footer">
				<div class="container">
					<div class="row">
						<div class="span12">
							<div class="copyright">
								<p><span>&copy; Բոլոր իրավունքները պաշտպանված են</span></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
    `;
}
createfooter();
