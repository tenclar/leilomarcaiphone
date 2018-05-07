<?php
/*
 * @desc Add custom data to what is returned by the web services. All custom data will be available to the JS API.
 * @param $post_data
 * @param $post
 * @param $component
 */
function wpak_add_custom_data( $post_data, $post, $component ) {
    
     $post_data['table_resultados_macho'] = get_field( 'resultados_macho' );
<<<<<<< HEAD
     $post_data['table_resultados_femea'] = get_field( 'resultados_femea' );

     $data_start_event = get_post_meta($post->ID, 'ai1ec_start', true);
     $post_data['ai1ec_start']= strtotime($data_start_event);
=======
     $post_data['table_resultados_femea'] = get_field( 'resultados_femea' );     
     $post_data['ai1ec_event_datetime'] = get_post_meta($post->ID, 'ai1ec_event_datetime', true);
>>>>>>> e4344cf0925177ad8e9bc0d10fc4e090268c9247

    // Add subhead. Expected as a post custom field.
    // Usage in app's templates: <%= post.subhead %>
    $post_data['subhead'] = get_post_meta($post->ID, 'subhead', true);

    // Add post thumbnail caption.
    // Usage in app's templates: <%= post.thumbnail.caption %>
    $thumbnail_id = get_post_thumbnail_id( $post->ID );
	if ( $thumbnail_id ) {
		$image_post = get_post( $thumbnail_id );
		if ( $image_post ) {
			if ( !empty( $post_data['thumbnail'] ) ) {
				$post_data['thumbnail']['caption'] = $image_post->post_excerpt;
			}
		}
	}
    
    return $post_data; // Return the modified $post_data

}

add_filter( 'wpak_post_data', 'wpak_add_custom_data', 10, 3 );
?>