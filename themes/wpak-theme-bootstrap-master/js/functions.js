define( 
	[ 
	'jquery',
	 'core/theme-app', 
	 'core/theme-tpl-tags', 
	 'core/modules/storage', 
	 'theme/js/bootstrap.min' 
	 ], function( $, App, TemplateTags, Storage ) {


	 App.setParam( 'go-to-default-route-after-refresh', false ); // Don't automatically show default screen after a refresh	

	var $refresh_button = $( '#refresh-button' );

	var current_search = { search_principal: '' , search_secundario:''  };

	$('#container').on('click','#ag-corte',function(e){
    e.preventDefault();
    //Set search params from HTML form:
    //current_search.search_string = $('#corte').val().trim();
    

    current_search.search_principal = 'agenda';
    current_search.search_secundario = 'corte';
    

		 //Get updated data from server for the current component:
		App.refreshComponent({
			success: function(answer, update_results) {
			    //Server answered with a filtered list of posts. 
			    //Reload current screen to see the result:
			    App.reloadCurrentScreen();
			},
			error: function(error) {
		    //Maybe do something if filtering went wrong.
		    //Note that "No network" error events are triggered automatically by core
			}
		});

	});

	$('#container').on('click','#ag-elite',function(e){
    e.preventDefault();
    //Set search params from HTML form:
    //current_search.search_string = $('#corte').val().trim();
    

    current_search.search_principal = 'agenda';
    current_search.search_secundario = 'elite';
    

		 //Get updated data from server for the current component:
		App.refreshComponent({
			success: function(answer, update_results) {
			    //Server answered with a filtered list of posts. 
			    //Reload current screen to see the result:
			    App.reloadCurrentScreen();
			},
			error: function(error) {
		    //Maybe do something if filtering went wrong.
		    //Note that "No network" error events are triggered automatically by core
			}
		});

	});

	$('#container').on('click','#agenda',function(e){
    e.preventDefault();
    //Set search params from HTML form:
    //current_search.search_string = $('#corte').val().trim();
    

    current_search.search_principal = 'agenda';
    current_search.search_secundario = '';
    

		 //Get updated data from server for the current component:
		App.refreshComponent({
			success: function(answer, update_results) {
			    //Server answered with a filtered list of posts. 
			    //Reload current screen to see the result:
			    App.reloadCurrentScreen();
			},
			error: function(error) {
		    //Maybe do something if filtering went wrong.
		    //Note that "No network" error events are triggered automatically by core
			}
		});

	});



	$('#container').on('click','#res-corte',function(e){
    e.preventDefault();
    //Set search params from HTML form:
    //current_search.search_string = $('#corte').val().trim();
    

    current_search.search_principal = 'resultados';
    current_search.search_secundario = 'corte';
    

		 //Get updated data from server for the current component:
		App.refreshComponent({
			success: function(answer, update_results) {
			    //Server answered with a filtered list of posts. 
			    //Reload current screen to see the result:
			    App.reloadCurrentScreen();
			},
			error: function(error) {
		    //Maybe do something if filtering went wrong.
		    //Note that "No network" error events are triggered automatically by core
			}
		});

	});

	$('#container').on('click','#res-elite',function(e){
    e.preventDefault();
    //Set search params from HTML form:
    //current_search.search_string = $('#corte').val().trim();
    

    current_search.search_principal = 'resultados';
    current_search.search_secundario = 'elite';
    

		 //Get updated data from server for the current component:
		App.refreshComponent({
			success: function(answer, update_results) {
			    //Server answered with a filtered list of posts. 
			    //Reload current screen to see the result:
			    App.reloadCurrentScreen();
			},
			error: function(error) {
		    //Maybe do something if filtering went wrong.
		    //Note that "No network" error events are triggered automatically by core
			}
		});

	});

	$('#container').on('click','#resultados',function(e){
    e.preventDefault();
    //Set search params from HTML form:
    //current_search.search_string = $('#corte').val().trim();
    

    current_search.search_principal = 'resultados';
    current_search.search_secundario = '';
    

		 //Get updated data from server for the current component:
		App.refreshComponent({
			success: function(answer, update_results) {
			    //Server answered with a filtered list of posts. 
			    //Reload current screen to see the result:
			    App.reloadCurrentScreen();
			},
			error: function(error) {
		    //Maybe do something if filtering went wrong.
		    //Note that "No network" error events are triggered automatically by core
			}
		});

	});





		/**
	 * Add our search params to web services that retrieve our post list.
	 * Applies to "Live Query" web service (that retrieves filtered component's post list)
	 * and to "Get More Posts" web service (so that search filters apply to pagination too).
	 */
	App.filter( 'web-service-params', function( web_service_params ) {

	    //If the user provided non empty search params:
	    if( current_search.search_principal !== '' ) {
	        //Add search params to the data sent to web service:
	        //web_service_params.my_search_filters = current_search;
	        web_service_params.my_search_filters = current_search;
	        //Those params will be retrieved with WpakWebServiceContext::getClientAppParam( 'my_search_filters' )
	        //on server side.
	    }

	    return web_service_params;
	} );


		/**
	 * Add 
	 * - current search params to the archive template, so that they're available in archive.html.
	 */
	App.filter( 'template-args', function( template_args, view_type, view_template ) {

	    if ( view_type === 'archive' ) {
	        template_args.current_search = current_search;
	    }

	    return template_args;
	} );




	
 	App.addCustomRoute( 'home', 'home' );
	 //App.addCustomRoute( 'archive-agenda', 'archive-agenda' );


	/*App.filter( 'template', function( def_template, current_screen) {
      if( TemplateTags.isTaxonomy('events_categories',['agenda','elite'], current_screen )) {
            def_template = 'archive-agenda'; //Don't need .html here.
       
      }
      return def_template;
	});*/

	/*App.filter( 'template-args', function( template_args, view_type, view_template ) { 
	if( view_template == 'agenda' ) {
		//template_args.my_custom_arg = { my: custom_dynamic_value };
		if( TemplateTags.isCategory('agenda', current_screen) ){
            template = 'archive-my-category'; //Don't need .html here.
      }
	}
	return template_args;
	});*/


	App.filter( 'default-route', function( default_route ) {
		default_route = 'home';
		return default_route ;
	});

   
	App.filter( 'make-history', function( history_action, history_stack, queried_screen, current_screen, previous_screen ) {
	//If coming from "home" screen and going to a "single" screen, consider it as a "push" in app history:
		if( current_screen.item_id === 'home' && queried_screen.screen_type === 'list' ) {
			history_action = 'push';			
		}
		if( current_screen.item_id === 'home' && queried_screen.screen_type === 'single' ) {
			history_action = 'push';			
		}
		if( current_screen.item_id === 'home' && queried_screen.screen_type === 'page' ) {
			history_action = 'push';			
		}
		if( current_screen.item_id === 'list' && queried_screen.screen_type === 'single' ) {
			history_action = 'push';			
		}
		
		return history_action;
	});

	/*App.filter( 'transition-direction', function ( direction, current_screen, queried_screen ) {
		
		if ( current_screen.item_id === 'home' && queried_screen.screen_type === 'list' ) {
			direction = 'next-screen';
		} 
		//If coming back from a "single" screen to the "home" screen, consider it as a "previous screen" transition:
		else if ( current_screen.screen_type === 'list' && queried_screen.item_id === 'home' ) {
			direction = 'previous-screen';
		}
		return direction;
	});*/

	/**
	 * Open all links inside single content with the inAppBrowser
	 */
	$( '#container' ).on( 'click', '#linkaovivo a', function( e ) {
		e.preventDefault();
		
		openWithInAppBrowser( 'https://www.youtube.com/embed/_W-AC-T7HuQ' );
		//openWithInAppBrowser( 'https://www.youtube.com/channel/UCd68n27RpAW2MXXvAAS6Mvw/live' );

	} );

	/**
	 * Launch app contents refresh when clicking the refresh button :
	 */
	$refresh_button.click( function( e ) {
		e.preventDefault();
		closeMenu();
		App.refresh();
	} );

	/**
	 * Animate refresh button when the app starts refreshing
	 */
	App.on( 'refresh:start', function() {
		$refresh_button.addClass( 'refreshing' );
	} );

	/**
	 * When the app stops refreshing :
	 * - scroll to top
	 * - stop refresh button animation
	 * - display success or error message
	 *
	 * Callback param : result : object {
	 *		ok: boolean : true if refresh is successful,
	 *		message: string : empty if success, error message if refresh fails,
	 *		data: object : empty if success, error object if refresh fails :
	 *					   use result.data to get more info about the error
	 *					   if needed.
	 * }
	 */
	App.on( 'refresh:end', function( result ) {
		scrollTop();
		Storage.clear( 'scroll-pos' );
		$refresh_button.removeClass( 'refreshing' );
		if ( result.ok ) {
			//$( '#feedback' ).removeClass( 'error' ).html( 'Conteudo atualizado com Sucesso!' ).slideDown();
		} else {
			//$( '#feedback' ).addClass( 'error' ).html( result.message ).slideDown();
		}
	} );

	/**
	 * When an error occurs, display it in the feedback box
	 */
	App.on( 'error', function( error ) {
		//$( '#feedback' ).addClass( 'error' ).html( error.message ).slideDown();
	} );

	/**
	 * Hide the feedback box when clicking anywhere in the body
	 */
	$( 'body' ).click( function( e ) {
		//$( '#feedback' ).slideUp();
	} );

	/**
	 * Back button 
	 */
	var $back_button = $( '#go-back' );
	
	//Show/Hide back button (in place of refresh button) according to current screen:
	App.on( 'screen:showed', function () {
		var display = App.getBackButtonDisplay();
		if ( display === 'show' ) {
			$refresh_button.hide();
			$back_button.show();
		} else if ( display === 'hide' ) {
			$back_button.hide();
			$refresh_button.show();
		}
	} );

	//Go to previous screen when clicking back button:
	$back_button.click( function ( e ) {
		e.preventDefault();
		App.navigateToPreviousScreen();
	} );

	

	/**
	 * Allow to click anywhere on post list <li> to go to post detail :
	 */
	$( '#container' ).on( 'click', 'li.media', function( e ) {
		e.preventDefault();
		var navigate_to = $( 'a', this ).attr( 'href' );
		App.navigate( navigate_to );
	} );

	/**
	 * Close menu when we click a link inside it.
	 * The menu can be dynamically refreshed, so we use "on" on parent div (which is always here):
	 */
	$( '#navbar-collapse' ).on( 'click', 'a', function( e ) {
		closeMenu();
			App.refresh();
			App.reloadCurrentScreen();
	} );

	/**
	 * Open all links inside single content with the inAppBrowser
	 */
	$( "#container" ).on( "click", ".single-content a, .page-content a", function( e ) {
		e.preventDefault();
		openWithInAppBrowser( e.target.href );
	} );
	
	$( "#container" ).on( "click", ".comments", function( e ) {
		e.preventDefault();
		
		$('#waiting').show();
		
		App.displayPostComments( 
			$(this).attr( 'data-post-id' ),
			function( comments, post, item_global ) {
				//Do something when comments display is ok
				//We hide the waiting panel in 'screen:showed'
			},
			function( error ){
				//Do something when comments display fail (note that an app error is triggered automatically)
				$('#waiting').hide();
			}
		);
	} );

	/**
	 * "Get more" button in post lists
	 */
	$( '#container' ).on( 'click', '.get-more', function( e ) {
		e.preventDefault();

		var $this = $( this );
		
		var text_memory = $this.text();
		$this.attr( 'disabled', 'disabled' ).text( 'Carregando...' );

		App.getMoreComponentItems( 
			function() {
				//If something is needed once items are retrieved, do it here.
				//Note : if the "get more" link is included in the archive.html template (which is recommended),
				//it will be automatically refreshed.
				$this.removeAttr( 'disabled' );
			},
			function( error, get_more_link_data ) {
				$this.removeAttr( 'disabled' ).text( text_memory );
			}
		);
	} );

	/**
	 * Do something before leaving a screen.
	 * Here, if we're leaving a post list, we memorize the current scroll position, to
	 * get back to it when coming back to this list.
	 */
	App.on( 'screen:leave', function( current_screen, queried_screen, view ) {
		//current_screen.screen_type can be 'list','single','page','comments'
		if ( current_screen.screen_type == 'list' ) {
			Storage.set( 'scroll-pos', current_screen.fragment, $( 'body' ).scrollTop() );
		}
		
	});

	/**
	 * Do something when a new screen is showed.
	 * Here, if we arrive on a post list, we resore the scroll position
	 */
	App.on( 'screen:showed', function( current_screen, view ) {
		//current_screen.screen_type can be 'list','single','page','comments'
		if ( current_screen.screen_type == 'list' ) {
			var pos = Storage.get( 'scroll-pos', current_screen.fragment );
			if ( pos !== null ) {
				$( 'body' ).scrollTop( pos );
			} else {
				scrollTop();
			}
		} else {
			scrollTop();
		}
		
		if ( current_screen.screen_type == 'comments' ) {
			$('#waiting').hide();
		}
		
	} );

	/**
	 * Example of how to react to network state changes :
	 */
	/*
	 App.on( 'network:online', function(event) {
	 $( '#feedback' ).removeClass( 'error' ).html( "Internet connexion ok :)" ).slideDown();
	 } );
	 
	 App.on( 'network:offline', function(event) {
	 $( '#feedback' ).addClass( 'error' ).html( "Internet connexion lost :(" ).slideDown();
	 } );
	 */

	/**
	 * Manually close the bootstrap navbar
	 */
	function closeMenu() {
		var navbar_toggle_button = $( ".navbar-toggle" ).eq( 0 );
		if ( !navbar_toggle_button.hasClass( 'collapsed' ) ) {
			navbar_toggle_button.click();
		}
	}

	/**
	 * Get back to the top of the screen
	 */
	function scrollTop() {
		window.scrollTo( 0, 0 );
	}

	/**
	 * Opens the given url using the inAppBrowser
	 */
	function openWithInAppBrowser( url ) {
		window.open( url, "_blank", "location=no" );
	}

} );