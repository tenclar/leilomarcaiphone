<?php 

function custom_query( $query_args, $component ) {

    $query_args['orderby'] = 'ai1ec_event_date';
	$query_args['order'] = 'DESC';
    
    return $query_args;
 }

 add_filter( 'wpak_posts_list_query_args', 'custom_query', 10, 1 );

?>