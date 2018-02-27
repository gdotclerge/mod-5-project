class Api::V1::PhotographersController < ApplicationController
  skip_before_action :authorized, only: [:index, :show, :selected_photographer]


  def index
    @photographers = Photographer.all
    @urls = @photographers.map { |p| p.custom_url }
    render json:  @urls, status: 200
  end


  def selected_photographer
    @photographer = Photographer.find_by(custom_url: photographer_params[:custom_url][1..-1])
    render json: @photographer, status: 200
  end


  def show
    @photographer = Photographer.find(params[:id])
    render json: @photographer
  end

  private

  def photographer_params
    params.require(:photographer).permit(
      :username,
      :password,
      :password_confirmation,
      :website,
      :custom_url,
      :business_name,
      :profile_photo,
      :instagram_url,
      :facebook_url
    )
  end


end
