package com.shoeclick.authentication;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import io.jsonwebtoken.ExpiredJwtException;

@Component
public class JwtAuthenticationFIlter extends OncePerRequestFilter {

	@Autowired
	private UserDetailsService userDetailsService;

	@Autowired
	private JwtUtil jwtUtil;

//	filtering JWT authentication
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {

		final String requestTokenHeader = request.getHeader("Authorization");
		System.out.println(requestTokenHeader);

		String username = null;
		String jwtToken = null;

//		extracting username from token
		if (requestTokenHeader != null && requestTokenHeader.startsWith("Bearer ")) {
//			yes
			jwtToken = requestTokenHeader.substring(7);
			try {

				username = this.jwtUtil.extractUsername(jwtToken);
			} catch (ExpiredJwtException e) {
				System.out.println("jwt token expired");
				e.printStackTrace();
			} catch (Exception e) {
				e.printStackTrace();
			}
		} else {
			System.out.println("Invalid token, not start with bearer starting");
		}
		
//		validate token
		if (username!=null && SecurityContextHolder.getContext().getAuthentication()==null) {
			final UserDetails userDetails = this.userDetailsService.loadUserByUsername(username);
			if (this.jwtUtil.validateToken(jwtToken, userDetails)) {
//				token is valid
				
				UsernamePasswordAuthenticationToken usernamePasswordAuthentication = new UsernamePasswordAuthenticationToken(userDetails,null,userDetails.getAuthorities());
				usernamePasswordAuthentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
				
				SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthentication);
			}
		}else {
			System.out.println("toen is not valid");
		}

		filterChain.doFilter(request, response);
	}

}
