class Api::V1::AuthController < ApplicationController
  skip_before_action :authorized, only: [:create, :show]

  def create
    if params[:user]
      @user = User.find_by(username: user_login_params[:username])
      if @user && @user.authenticate(user_login_params[:password])
        token = encode_token({ user_id: @user.id })
        render json: { user: @user, jwt: token }, status: 202
      else
        render json: { message: "Invalid username or password" }, status: 401
      end
    elsif params[:photographer]
      @photographer = Photographer.find_by(username: photographer_login_params[:username])
      if @photographer && @photographer.authenticate(photographer_login_params[:password])
        token = encode_token({ photographer_id: @photographer.id })
        render json: {
          photographer: ActiveModelSerializers::Adapter::Json.new(PhotographerSerializer.new(@photographer)).serializable_hash,
          jwt: token
        }, status: 202
      else
        render json: { message: "Invalid username or password" }, status: 401
      end

    end
  end

  def get_current_user_or_photographer
    if logged_in? && current_user
      puts "WE GOT A USER"
      render json: { user: current_user }, status: 202
    elsif logged_in? && current_photographer
      puts "WE GOT A PHOTOGRAPHER"
      render json: {
        photographer: ActiveModelSerializers::Adapter::Json.new(PhotographerSerializer.new(current_photographer)).serializable_hash
      }, status: 202
    end
  end


  private


  def photographer_login_params
    params.require(:photographer).permit(:username, :password)
  end

  def user_login_params
    params.require(:user).permit(:username, :password)
  end
end
