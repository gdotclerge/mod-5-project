class Api::V1::AuthController < ApplicationController
  skip_before_action :authorized, only: [:create]

  def create
    @photographer = Photographer.find_by(username: photographer_login_params[:username])
    if @photographer && @photographer.authenticate(photographer_login_params[:password])
      token = encode_token({ photographer_id: @photographer.id })
      render json: { photographer: @photographer, jwt: token }, status: 202
    else
      render json: { message: "Invalid username or password" }, status: 401
    end
  end

  private

  def photographer_login_params
    params.require(:photographer).permit(:username, :password)
  end

end
