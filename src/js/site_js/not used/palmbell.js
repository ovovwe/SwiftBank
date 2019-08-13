//$('document').ready(function(){
	//fetch_services('true');
//});


function count_product_avail2(product_name, element_result_holder_id){
// It requires two arguments; the product_name to query for, and the id of the element that will be displaying the result
		$.ajax({  
			url:"../php_scripts/count_product_avail_index.php",
			method:"POST",
			data:{product_name_to_query:product_name},
			success:function(data){
				$('#'+element_result_holder_id).html(data);
			}
		});
		// alert(product_name);
}

function fetch_services(root_location){
	if(root_location.trim()=="true"){
		var services_php_file = "php_scripts/services_root.php";
	}
	else{
		var services_php_file = "../php_scripts/services_main.php";
	}
$('#services').load(services_php_file);
}

function fetch_portfolio(root_location){
	if(root_location.trim()=="true"){
		var services_php_file = "php_scripts/portfolio_root.php";
	}
	else{
		var services_php_file = "../php_scripts/portfolio_main.php";
	}
$('#portfolio').load(services_php_file);
}

function fetch_portfolio_service(service_id_js, root_location){
	if(root_location.trim()=="true"){
		var services_php_file = "php_scripts/portfolio_root.php";
	}
	else{
		var services_php_file = "../php_scripts/portfolio_main.php";
	}
	$.ajax({  
			url:services_php_file,
			method:"POST",
			data:{service_id_php:service_id_js},
			success:function(data){
				$('#portfolio').html(data);
				// alert(data);
			}
		});
		// alert(product_name);
}

function admin_sign_in_form(){
		var username	=	$('#user').val().trim();
		var password	=	$('#pass').val().trim();
		$.ajax({  
			url:"../php_scripts/admin_signin.php",
			method:"POST",
			data:{admin_username:username, admin_password:password},
			success:function(data){
				if(data.trim()=="successful"){
					window.location = "admin_portal.php?ref=welcome_user";
				}
				else{
					$('#request_response').addClass('alert alert-danger');
					$('#request_response').text('Username or password is incorrect!');
				}
					//alert(data.trim());
			}
		});
}

function toggle_admin_container_with_id(container_id){
    $('#'+container_id+'_container').toggle(500);
}

$(window).load(function(){
// When the page loads, all items with class admin_panel_contain should be hidden.
 $('.admin_panel_contain').hide();
}); 

function hide_all_but_this_with_id(this_item_class){
// Hide all containers with class="admin_panel_container" except a container with id=this_item_class(i.e. the passed id)
  $('.admin_panel_contain:not(#'+this_item_class+')').hide(500);
  // toggle the container with the passed id
  $('#'+this_item_class).toggle(500);
}


